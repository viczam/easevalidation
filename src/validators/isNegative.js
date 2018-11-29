import createValidator from '../createValidator';

export default createValidator('isNegative', (value, strict = true) =>
  strict ? value < 0 : value <= 0,
);
