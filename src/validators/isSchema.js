import createValidator from '../createValidator';
import isEveryValidator from './isEvery';

const isEvery = createValidator('isEvery', isEveryValidator);

export default (value, schema) => {
  if (typeof value !== 'object') {
    return false;
  }

  const errors = Object.keys(schema).reduce((acc, propr) => {
    const validator = schema[propr];
    let validate;

    if (typeof validator.toValidator === 'function') {
      validate = validator.toValidator();
    } else if (Array.isArray(validator)) {
      validate = isEvery(...validator);
    } else {
      validate = validator;
    }

    try {
      Object.assign(value, {
        [propr]: validate(value[propr]),
      });
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
