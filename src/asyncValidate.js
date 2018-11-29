import { argsToValidators } from './helpers';

export default (...args) => async value =>
  argsToValidators(args).reduce(
    (currentValue, validator) => currentValue.then(validator(currentValue)),
    Promise.resolve(value),
  );
