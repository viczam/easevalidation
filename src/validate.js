import flatten from 'lodash/flatten';

const toValidator = validator =>
  typeof validator.toValidator === 'function' ? validator.toValidator() : validator;

const argsToValidators = (...args) => flatten(...args).map(toValidator);

export default (...args) => value =>
  argsToValidators(args).reduce((currentValue, validator) => validator(currentValue), value);
