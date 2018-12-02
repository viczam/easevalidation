import validate from './validate';

export default (...args) => {
  const doValidate = initialValue => {
    try {
      const value = validate(...args)(initialValue);
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
