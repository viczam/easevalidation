import flatten from 'lodash/flatten';
import { test, validate, validators as v } from './index';
import createValidator from './createValidator';

class ValidatorStack {
  constructor(validatorsMap = {}, initialValidators = []) {
    this.stack = initialValidators;
    this.extend(validatorsMap);
  }

  toValidator = code => createValidator(code, v.every(this.stack))();

  test = value => test(this.stack)(value);

  validate = value => validate(this.stack)(value);

  extend = validatorsMap => {
    Object.assign(
      this,
      Object.keys(validatorsMap).reduce(
        (acc, key) => ({
          ...acc,
          [key]: (...args) => {
            this.stack.push(validatorsMap[key](...args));
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
