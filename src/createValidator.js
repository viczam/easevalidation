import ValidationError from './ValidationError';

const createError = ({ value, code, options, error }) =>
  new ValidationError({
    value,
    code,
    options,
    error,
  });

export default (...args) => (...options) => value => {
  let code;
  let validator;

  if (args.length === 1) {
    validator = args[0];
    code = validator.name;
  } else {
    [code, validator] = args;
  }

  try {
    const isValid = validator(value, ...options);

    if (!isValid) {
      throw createError({ value, code, options });
    }

    return value;
  } catch (error) {
    if (!(error instanceof ValidationError)) {
      throw createError({ value, code, options, error });
    }

    throw error;
  }
};
