import flatten from 'lodash/flatten';
import {
  createValidator,
  createAsyncValidator,
  test,
  asyncTest,
  validate,
  asyncValidate,
} from './index';

class ValidatorStack {
  constructor(code, knownValidators = {}, initialValidators = []) {
    this.code = code;
    this.stack = initialValidators;
    this.extend(knownValidators);
    this.error = null;
  }

  toValidator = (code = this.code) =>
    createValidator(code, value => ({
      isValid: true,
      value: validate(this.stack)(value),
    }))();

  toAsyncValidator = (code = this.code) =>
    createAsyncValidator(code, async value => ({
      isValid: true,
      value: await asyncValidate(this.stack)(value),
    }))();

  test = value => {
    const doValidate = test(this.stack);
    const isValid = doValidate(value);
    this.error = doValidate.error;
    return isValid;
  };

  asyncTest = async value => {
    const doValidate = asyncTest(this.stack);
    const isValid = await doValidate(value);
    this.error = doValidate.error;
    return isValid;
  };

  validate = value => validate(this.stack)(value);

  asyncValidate = async value => asyncValidate(this.stack)(value);

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
