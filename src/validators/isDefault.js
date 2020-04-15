import createValidator from '../createValidator';

export default createValidator('isDefault', (value, defaultValue) => ({
  isValid: true,
  value: typeof value !== 'undefined' ? value : defaultValue,
}));
