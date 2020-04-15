import createValidator from '../createValidator';
import validate from '../validate';

export default createValidator('isEvery', (initialValue, ...validators) => ({
  isValid: true,
  value: validate(...validators)(initialValue),
}));
