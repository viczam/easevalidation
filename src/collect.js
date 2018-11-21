import flatten from 'lodash/flatten';

export default (...validators) => value =>
  flatten(validators).reduce((acc, validator) => {
    try {
      validator(value);
      return acc;
    } catch (err) {
      return [...acc, err];
    }
  }, []);
