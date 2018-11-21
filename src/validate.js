import flatten from 'lodash/flatten';

export default (...validators) => value =>
  flatten(validators).reduce((error, validator) => {
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
