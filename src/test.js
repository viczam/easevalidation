import { argsToValidators } from './helpers';

export default (...args) => {
  const validate = value =>
    argsToValidators(args).reduce((isValid, validator) => {
      if (!isValid) {
        return isValid;
      }

      try {
        validator(value);
        validate.error = null;
        return true;
      } catch (error) {
        validate.error = error;
        return false;
      }
    }, true);

  return validate;
};
