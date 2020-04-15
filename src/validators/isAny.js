import flatten from 'lodash/flatten';
import createValidator from '../createValidator';
import validate from '../validate';

export default createValidator('isAny', (value, ...validators) => {
  let finalValue;
  const isValid = flatten(validators).some((validator) => {
    try {
      finalValue = validate(validator)(value);
      return true;
    } catch (error) {
      return false;
    }
  });

  return {
    isValid,
    value: finalValue,
  };
});
