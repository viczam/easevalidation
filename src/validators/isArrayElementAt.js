/* eslint-disable no-param-reassign, import/no-cycle */
import createValidator from '../createValidator';
import validate from '../validate';

export default createValidator('isArrayElement', (value, index, ...validators) => {
  if (value.length - 1 < index) {
    throw new Error(`Missing array element at index: ${index}!`);
  }

  value[index] = validate(...validators)(value[index]);

  return {
    isValid: true,
    value,
  };
});
