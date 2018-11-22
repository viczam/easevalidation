import mainValidators from './validators/index';

export const fromJSON = (schema, validators = mainValidators) => {
  if (Array.isArray(schema)) {
    return mainValidators.every(schema.map(s => fromJSON(s, validators)));
  }

  return validators[schema.code](parseConfig(schema.config, validators)); // eslint-disable-line no-use-before-define
};

const parseConfig = (config, validators) => {
  if (Array.isArray(config)) {
    return config.map(value => parseConfig(value, validators));
  }

  if (typeof config === 'object') {
    if (config.code === 'schema') {
      return fromJSON(config.config, validators);
    }

    return Object.keys(config).reduce(
      (acc, key) => ({
        ...acc,
        [key]: parseConfig(config[key], validators),
      }),
      {},
    );
  }

  return config;
};

export const toJSON = () => {};
