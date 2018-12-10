import { createValidator, validate, test } from '..';

/**
 * isTernary(isNumber(), isMin(100), isEvery(isString(), isLength({ min: 3 })))
 */
export default createValidator(
  'isTernary',
  (value, conditionValidator, truthyValidator, falsyValidator) => ({
    isValid: true,
    value: test(conditionValidator)(value)
      ? validate(truthyValidator)(value)
      : validate(falsyValidator)(value),
  }),
);
