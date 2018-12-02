import { createValidator } from '..';

export default createValidator(
  'isCloseTo',
  (value, otherValue) => Math.abs(value - otherValue) < Number.EPSILON,
);
