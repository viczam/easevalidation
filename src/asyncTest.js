import validate from './validate';
import { argsToValidators } from './helpers';

export default (...args) => {
  const validators = argsToValidators(args);
  const doValidate = async initialValue => {
    try {
      const value = await validate(validators)(initialValue);
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
