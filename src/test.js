import { argsToValidators } from './helpers';

export default (...args) => value =>
  argsToValidators(args).reduce((isValid, validator) => {
    if (!isValid) {
      return isValid;
    }

    try {
      validator(value);
      return true;
    } catch (err) {
      return false;
    }
  }, true);
