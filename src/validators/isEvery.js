import { createValidator, validate } from '..';

export default createValidator('isEvery', (initialValue, ...validators) => ({
  isValid: true,
  value: validate(...validators)(initialValue),
}));
