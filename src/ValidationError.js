import util from 'util';

export const flag = Symbol('validationErrorFlag');

class ValidationError extends Error {
  constructor({ value, code, options, error }) {
    super();
    this.name = 'ValidationError';
    this.message = `Failed Validation! ${util.inspect(value)} failed passing "${code}" validator!`;
    this.value = value;
    this.code = code;
    this.options = options;
    this.error = error;
    this[flag] = true;
    Error.captureStackTrace(this, ValidationError);
  }
}

export default ValidationError;

export const isValidationError = error => !!error[flag];
