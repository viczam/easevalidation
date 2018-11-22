import createValidator from '../createValidator';
import every from './every';

const everyValidator = createValidator('every', every);

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
      return acc;
    } catch (err) {
      return {
        ...acc,
        [propr]: err,
      };
    }
  }, {});

  if (!Object.keys(errors).length) {
    return true;
  }

  throw errors;
};
