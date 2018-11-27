import { argsToValidators } from './helpers';

export default (...args) => value =>
  argsToValidators(args).reduce((currentValue, validator) => validator(currentValue), value);
