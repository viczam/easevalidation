import ValidationError from './ValidationError';

const createError = ({ value, code, config, error }) =>
  new ValidationError({
    value,
    code,
    config,
    error,
  });

export default (...args) => {
  let code;
  let validator;

  if (args.length === 1) {
    validator = args[0];
    code = validator.name;
  } else {
    [code, validator] = args;
  }

  return (...config) => {
    const validate = value => {
      try {
        const isValid = validator(value, ...config);

        if (!isValid) {
          throw createError({ value, code, config });
        }

        return value;
      } catch (error) {
        if (!(error instanceof ValidationError)) {
          throw createError({ value, code, config, error });
        }

        throw error;
      }
    };

    Object.assign(validate, {
      __validation__: {
        code,
        config,
      },
    });

    return validate;
  };
};
