import ValidationError from './ValidationError';
import ConfigError from './ConfigError';

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

  if (typeof validateConfig === 'function') {
    try {
      config = validateConfig(...configArgs);
    } catch (error) {
      throw new ConfigError({ code, error, config: configArgs });
    }
  }

  const validate = startValue => {
    let result;

    try {
      result = toResult(validator(startValue, ...config), startValue);
    } catch (error) {
      throw new ValidationError({
        value: startValue,
        code,
        config,
        error,
      });
    }

    const { isValid, value } = result;

    if (!isValid) {
      throw new ValidationError({
        value: startValue,
        code,
        config,
      });
    }

    return typeof setValue === 'function' ? setValue(value, ...config) : value;
  };

  Object.assign(validate, {
    __validation__: {
      code,
      config,
    },
  });

  return validate;
};
