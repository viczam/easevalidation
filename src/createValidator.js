import ValidationError from './ValidationError';
import ConfigError from './ConfigError';

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

export default (code, validator, setValue, validateConfig) => (...configArgs) => {
  let config = configArgs;

  if (validateConfig && typeof validateConfig === 'function') {
    try {
      config = validateConfig(...configArgs);
    } catch (error) {
      throw new ConfigError({ code, error, config: configArgs });
    }
  }

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
