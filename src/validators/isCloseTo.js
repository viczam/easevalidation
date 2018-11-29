import createValidator from '../createValidator';

export default createValidator(
  'isCloseTo',
  (value, otherValue) => Math.abs(value - otherValue) < Number.EPSILON,
);
