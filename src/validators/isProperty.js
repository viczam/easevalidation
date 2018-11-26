import flatten from 'lodash/flatten';
import test from '../test';

export default (value, property, ...validators) => {
  if (typeof value[property] === 'undefined') {
    return false;
  }

  const validate = test(...flatten(validators));
  const isValid = validate(value[property]);

  Object.assign(value, {
    [property]: validate.value,
  });

  return isValid;
};
