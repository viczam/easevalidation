import { argsToValidators } from './helpers';

export default (...args) => value =>
  argsToValidators(args).reduce((error, validator) => {
    if (error) {
      return error;
    }

    try {
      validator(value);
      return undefined;
    } catch (err) {
      return err;
    }
  }, undefined);
