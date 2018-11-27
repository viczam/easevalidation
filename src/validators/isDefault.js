export default (value, defaultValue) => ({
  isValid: true,
  value: typeof value !== 'undefined' ? value : defaultValue,
});
