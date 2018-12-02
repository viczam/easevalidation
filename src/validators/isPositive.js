import { createValidator } from '..';

export default createValidator('isPositive', (value, strict = true) =>
  strict ? value > 0 : value >= 0,
);
