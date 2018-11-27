import validate from '../validate';

export default (value, ...validators) => {
  if (!Array.isArray(value)) {
    return false;
  }

  if (validators.length) {
    return {
      isValid: true,
      value: value.map(item => validate(...validators)(item)),
    };
  }

  return true;
};
