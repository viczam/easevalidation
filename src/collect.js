import { argsToValidators } from './helpers';

export default (...args) => value =>
  argsToValidators(args).reduce((acc, validator) => {
    try {
      validator(value);
      return acc;
    } catch (err) {
      return [...acc, err];
    }
  }, []);
