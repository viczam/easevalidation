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

  const { __validation__ } = config;

  return {
    code: __validation__.code,
    ...(__validation__.config.length ? { config: __validation__.config } : {}),
  };
};

const formatError = (
  error,
  formatter = err => ({
    code: err.code,
    ...(!err.error && err.config.length ? { config: formatConfig(err.config) } : {}),
    ...(err.error ? { error: formatError(err.error, formatter) } : {}),
  }),
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
