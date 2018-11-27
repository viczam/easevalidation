import difference from 'lodash/difference';
import validate from '../validate';

export default (value, schema, options = {}) => {
  if (typeof value !== 'object') {
    return false;
  }

  const { allowUnknown, updateOriginal } = {
    allowUnknown: true, // properties missing a validator will be ignored
    updateOriginal: true, // `value` will be updated by validators instead of returning a new object
    ...options,
  };

  if (!allowUnknown) {
    const props = difference(Object.keys(value), Object.keys(schema));
    if (props.length) {
      throw new Error(`Unknown properties: ${props.join(',')}!`);
    }
  }

  const errors = {};
  const obj = {};

  Object.keys(schema).forEach(propr => {
    const validator = schema[propr];
    let doValidate;

    if (typeof validator.toValidator === 'function') {
      doValidate = validator.toValidator();
    } else if (Array.isArray(validator)) {
      doValidate = validate(...validator);
    } else {
      doValidate = validator;
    }

    try {
      obj[propr] = doValidate(value[propr]);
    } catch (err) {
      errors[propr] = err;
    }
  });

  if (Object.keys(errors).length) {
    throw errors;
  }

  if (updateOriginal) {
    Object.assign(value, obj);
    return true;
  }

  return {
    isValid: true,
    value: {
      ...value,
      ...obj,
    },
  };
};
