import flatten from 'lodash/flatten';
import { test, validate, validators as v } from './index';
import createValidator from './createValidator';

const createChainedValidator = (code, validatorsMap, initialValidators = []) => {
  const validators = initialValidators;
  const map = Object.keys(validatorsMap).reduce(
    (acc, key) => ({
      ...acc,
      [key]: (...args) => {
        validators.push(validatorsMap[key](...args));
        return map;
      },
    }),
    {},
  );

  map.toValidator = () => createValidator(code, v.every(validators))();
  map.test = value => test(validators)(value);
  map.validate = value => validate(validators)(value);
  map.extend = (...args) => validators.push(...flatten(args));

  return map;
};

export default createChainedValidator;
