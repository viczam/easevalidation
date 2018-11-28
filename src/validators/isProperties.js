import doPick from 'lodash/pick';
import doOmit from 'lodash/omit';
import validate from '../validate';

export default (obj, { min, max, length, validator, pick, omit } = {}) => {
  const properties = Object.keys(obj);
  let value = obj;

  if (typeof min !== 'undefined' && properties.length < min) {
    return false;
  }

  if (typeof max !== 'undefined' && properties.length > max) {
    return false;
  }

  if (typeof length !== 'undefined' && properties.length !== length) {
    return false;
  }

  if (Array.isArray(pick) && pick.length) {
    value = doPick(value, pick);
  }

  if (Array.isArray(omit) && omit.length) {
    value = doOmit(value, omit);
  }

  if (validator) {
    value = Object.keys(value).reduce(
      (acc, property) => ({
        ...acc,
        [property]: validate(validator)(value[property]),
      }),
      {},
    );
  }

  return {
    isValid: true,
    value,
  };
};
