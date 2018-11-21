import ValidationError from './ValidationError';

export default ({ value, code, options, error }) =>
  new ValidationError({
    value,
    code,
    options,
    error,
  });
