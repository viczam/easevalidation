import createValidator from './createValidator';

export default validators =>
  Object.keys(validators).reduce(
    (acc, code) => ({
      ...acc,
      [code]: createValidator(code, validators[code]),
    }),
    {},
  );
