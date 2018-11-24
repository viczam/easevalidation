import flatten from 'lodash/flatten';

export const toValidator = validator =>
  typeof validator.toValidator === 'function' ? validator.toValidator() : validator;

export const argsToValidators = (...args) => flatten(...args).map(toValidator);
