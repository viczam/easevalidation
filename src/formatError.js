/* eslint-disable no-underscore-dangle */
import isPlainObject from 'lodash/isPlainObject';

export const formatConfig = config => {
  if (Array.isArray(config)) {
    return config.map(formatConfig);
  }

  if (isPlainObject(config)) {
    return Object.keys(config).reduce(
      (acc, key) => ({
        ...acc,
        [key]: formatConfig(config[key]),
      }),
      {},
    );
  }

  if (typeof config !== 'function' || !config.__validation__) {
    return config;
  }

  return config.__validation__;
};

const formatError = (
  error,
  formatter = err => {
    const result = {
      code: err.code,
    };

    if (err.config.length) {
      result.config = formatConfig(err.config);
    }

    if (err.error) {
      result.error = err.error && formatError(err.error, formatter);
    }

    return result;
  },
) => {
  if (Array.isArray(error)) {
    return error.map(err => formatError(err, formatter));
  }

  if (isPlainObject(error)) {
    return Object.keys(error).reduce(
      (acc, key) => ({
        ...acc,
        [key]: formatError(error[key], formatter),
      }),
      {},
    );
  }

  if (!error.code) {
    return error;
  }

  return formatter(error, formatter);
};

export default formatError;
