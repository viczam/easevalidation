/* eslint-disable no-underscore-dangle */
import pick from 'lodash/pick';
import omit from 'lodash/omit';
import isPlainObject from 'lodash/isPlainObject';

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

const formatError = (error, short = false) => {
  if (Array.isArray(error)) {
    return error.map(err => formatError(err, short));
  }

  if (isPlainObject(error)) {
    return Object.keys(error).reduce(
      (acc, key) => ({
        ...acc,
        [key]: formatError(error[key], short),
      }),
      {},
    );
  }

  if (!error.code) {
    return error;
  }

  const result = {
    ...pick(error, ['code', 'value']),
    config: formatConfig(error.config),
    error: error.error && formatError(error.error, short),
  };

  return short ? omit(result, ['value', 'config']) : result;
};

export default formatError;
