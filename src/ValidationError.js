class ValidationError extends Error {
  constructor({ value, code, config, error }) {
    super();
    this.name = 'ValidationError';
    this.message = `Failed passing "${code}" validator!${
      error ? ` (${error.message || error.toString()})` : ''
    }`;
    this.value = value;
    this.code = code;
    this.config = config;
    this.error = error;
    Error.captureStackTrace(this, ValidationError);
  }
}

export default ValidationError;
