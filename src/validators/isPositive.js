import createValidator from '../createValidator';

export default createValidator('isPositive', (value, strict = true) =>
  strict ? value > 0 : value >= 0,
);
