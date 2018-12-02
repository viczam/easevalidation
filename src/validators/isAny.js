import flatten from 'lodash/flatten';
import { validate, createValidator } from '..';

export default createValidator('isAny', (value, ...validators) => {
  let finalValue;
  const isValid = flatten(validators).some(validator => {
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
