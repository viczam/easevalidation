import { createValidator } from '..';

export default createValidator('isNegative', (value, strict = true) =>
  strict ? value < 0 : value <= 0,
);
