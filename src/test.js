import { argsToValidators } from './helpers';

export default (...args) => {
  const validators = argsToValidators(args);
  const validate = initialValue => {
    let value = initialValue;
    let error;

    const result = validators.reduce((isValid, validator) => {
      if (!isValid) {
        return isValid;
      }

      try {
        value = validator(value);
        error = null;
        return true;
      } catch (err) {
        error = err;
        return false;
      }
    }, true);

    validate.value = value;
    validate.error = error;

    return result;
  };

  return validate;
};
