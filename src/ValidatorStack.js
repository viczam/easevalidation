import flatten from 'lodash/flatten';
import { test, validate, createValidator } from './index';

class ValidatorStack {
  constructor(code, initialValidators = []) {
    this.code = code;
    this.stack = initialValidators;
    this.error = null;
  }

  toValidator = (code = this.code) =>
    createValidator(code, value => ({
      isValid: true,
      value: validate(this.stack)(value),
    }))();

  test = value => {
    const doValidate = test(this.stack);
    const isValid = doValidate(value);
    this.error = doValidate.error;
    return isValid;
  };

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
