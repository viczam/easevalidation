import test from '../test';

export default (value, itemValidator) => {
  if (!Array.isArray(value)) {
    return false;
  }

  if (itemValidator) {
    return value.every(item => test(itemValidator)(item));
  }

  return true;
};
