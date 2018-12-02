import { createValidator } from '..';

export default createValidator('isDefault', (value, defaultValue) => ({
  isValid: true,
  value: typeof value !== 'undefined' ? value : defaultValue,
}));
