import prettyFormat from 'pretty-format';

export const flag = Symbol('validationErrorFlag');

class ValidationError extends Error {
  constructor({ value, code, config, error }) {
    super();
    this.name = 'ValidationError';
    this.message = `Failed Validation! ${prettyFormat(value)} failed passing "${code}" validator!`;
    this.value = value;
    this.code = code;
    this.config = config;
    this.error = error;
    this[flag] = true;
    Error.captureStackTrace(this, ValidationError);
  }
}

export default ValidationError;

export const isValidationError = error => !!error[flag];
