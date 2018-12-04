/* eslint-disable no-underscore-dangle */
import pick from 'lodash/pick';
import isPlainObject from 'lodash/isPlainObject';
import ValidationError from './ValidationError';

const formatConfig = config => {
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

const formatError = error => {
  if (Array.isArray(error)) {
    return error.map(formatError);
  }

  if (isPlainObject(error)) {
    return Object.keys(error).reduce(
      (acc, key) => ({
        ...acc,
        [key]: formatError(error[key]),
      }),
      {},
    );
  }

  if (!(error instanceof ValidationError)) {
    return error;
  }

  return {
    ...pick(error, ['code', 'value']),
    config: formatConfig(error.config),
    error: error.error && formatError(error.error),
  };
};

export default formatError;
