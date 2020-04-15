import createValidator from '../createValidator';
import validate from '../validate';

export default createValidator('isArray', (value, ...validators) => {
  if (!Array.isArray(value)) {
    return false;
  }

  if (validators.length) {
    return {
      isValid: true,
      value: value.map((item) => validate(...validators)(item)),
    };
  }

  return true;
});
