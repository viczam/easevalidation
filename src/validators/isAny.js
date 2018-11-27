import flatten from 'lodash/flatten';
import test from '../test';

export default (value, ...validators) => {
  let finalValue;
  const isValid = flatten(validators).some(validator => {
    const validate = test(validator);
    const isThisValid = validate(value);
    finalValue = validate.value;
    return isThisValid;
  });

  return {
    isValid,
    value: finalValue,
  };
};
