import ValidationError from './ValidationError';

const createError = ({ value, code, config, error }) =>
  new ValidationError({
    value,
    code,
    config,
    error,
  });

const toResult = (result, value) => {
  if (typeof result === 'boolean') {
    return {
      isValid: result,
      value,
    };
  }

  if (typeof result === 'object') {
    return {
      value,
      ...result,
    };
  }

  throw new Error(`Invalid validator result: ${result}!`);
};

export default (code, validator, setValue) => (...config) => {
  const validate = startValue => {
    try {
      const { isValid, value } = toResult(validator(startValue, ...config), startValue);

      if (!isValid) {
        throw createError({ value: startValue, code, config });
      }

      return typeof setValue === 'function' ? setValue(value, ...config) : value;
    } catch (error) {
      if (!(error instanceof ValidationError)) {
        throw createError({ value: startValue, code, config, error });
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
