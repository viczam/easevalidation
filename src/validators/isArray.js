import validate from '../validate';

export default (value, itemValidator) => {
  if (!Array.isArray(value)) {
    return false;
  }

  if (itemValidator) {
    return {
      isValid: true,
      value: value.map(item => validate(itemValidator)(item)),
    };
  }

  return true;
};
