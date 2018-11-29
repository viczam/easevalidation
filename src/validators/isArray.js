import validate from '../validate';
import createValidator from '../createValidator';

export default createValidator('isArray', (value, ...validators) => {
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
});
