import createValidator from './createValidator';

export default validators =>
  Array.isArray(validators)
    ? validators.map(createValidator)
    : Object.keys(validators).reduce(
        (acc, code) => ({
          ...acc,
          [code]: createValidator(code, validators[code]),
        }),
        {},
      );
