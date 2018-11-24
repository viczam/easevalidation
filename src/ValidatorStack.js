import flatten from 'lodash/flatten';
import { test, validate } from './index';
import createValidator from './createValidator';

class ValidatorStack {
  constructor(knownValidators = {}, initialValidators = []) {
    this.stack = initialValidators;
    this.extend(knownValidators);
  }

  toValidator = code => createValidator(code, test(this.stack))();

  test = value => test(this.stack)(value);

  validate = value => validate(this.stack)(value);

  extend = knownValidators => {
    Object.assign(
      this,
      Object.keys(knownValidators).reduce(
        (acc, key) => ({
          ...acc,
          [key]: (...args) => {
            this.stack.push(knownValidators[key](...args));
            return this;
          },
        }),
        {},
      ),
    );

    return this;
  };

  addValidators = (...args) => {
    this.stack.push(...flatten(args));
    return this;
  };
}

export default ValidatorStack;
