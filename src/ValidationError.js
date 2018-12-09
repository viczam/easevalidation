import formatError from './formatError';

class ValidationError extends Error {
  constructor({ value, code, config, error, message }) {
    super();
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
    this.message =
      message ||
      `Failed passing "${code}" validator!${
        error && error instanceof Error ? ` (${error.message || error.toString()})` : ''
      }`;
    this.value = value;
    this.code = code;
    this.config = config;
    this.error = error;
  }

  toJSON() {
    return formatError(this);
  }

  toString() {
    return `${this.stack}\n${JSON.stringify(this.toJSON(), null, 2)}`;
  }

  inspect() {
    return this.toString();
  }
}

export default ValidationError;
