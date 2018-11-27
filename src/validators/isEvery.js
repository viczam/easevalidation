import validate from '../validate';

export default (initialValue, ...validators) => ({
  isValid: true,
  value: validate(...validators)(initialValue),
});
