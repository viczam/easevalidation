import flatten from 'lodash/flatten';
import { test, validate, validators as v } from './index';
import createValidator from './createValidator';

const createChainedValidator = (validatorsMap, initialValidators = []) => {
  const map = {
    toValidator: code => createValidator(code, v.every(map.validators))(),
    test: value => test(map.validators)(value),
    validate: value => validate(map.validators)(value),
    extend: mapOfValidators => {
      Object.assign(
        map,
        Object.keys(mapOfValidators).reduce(
          (acc, key) => ({
            ...acc,
            [key]: (...args) => {
              map.validators.push(mapOfValidators[key](...args));
              return map;
            },
          }),
          {},
        ),
      );

      return map;
    },
    addValidators: (...args) => {
      map.validators.push(...flatten(args));
      return map;
    },
    validators: initialValidators,
  };

  map.extend(validatorsMap);

  return map;
};

export default createChainedValidator;
