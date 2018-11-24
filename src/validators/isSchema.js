import createValidator from '../createValidator';
import isEvery from './isEvery';

const everyValidator = createValidator('every', isEvery);

export default (value, schema) => {
  if (typeof value !== 'object') {
    return false;
  }

  const errors = Object.keys(schema).reduce((acc, propr) => {
    const validator = schema[propr];

    try {
      if (typeof validator.toValidator === 'function') {
        validator.toValidator()(value[propr]);
      } else if (Array.isArray(validator)) {
        everyValidator(...validator)(value[propr]);
      } else {
        validator(value[propr]);
      }
    } catch (err) {
      Object.assign(acc, {
        [propr]: err,
      });
    }

    return acc;
  }, {});

  if (!Object.keys(errors).length) {
    return true;
  }

  throw errors;
};
