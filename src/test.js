import flatten from 'lodash/flatten';

export default (...validators) => value =>
  flatten(validators).reduce((isValid, validator) => {
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
