import validate from './validate';
import { argsToValidators } from './helpers';

export default (...args) => {
  const validators = argsToValidators(args);
  const doValidate = initialValue => {
    try {
      const value = validate(validators)(initialValue);
      doValidate.value = value;
      doValidate.error = undefined;
      return true;
    } catch (error) {
      doValidate.value = undefined;
      doValidate.error = error;
      return false;
    }
  };
  return doValidate;
};
