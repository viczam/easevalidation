/* eslint-disable no-underscore-dangle */
import createValidator from './createValidator';
import validate from './validate';

/**
 * const isOdd = createComposedValidator('isOdd', isEvery(isNumber(), isFinite(), isValid(value => !!(value % 2))));
 */
export default (code, validator) =>
  createValidator(code, value => ({
    isValid: true,
    value: validate(validator)(value),
  }));
