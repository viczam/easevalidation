class ConfigError extends Error {
  constructor({ code, error, config }) {
    super();
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
    this.message = `Invalid configuration for "${code}" validator!`;
    this.error = error;
    this.config = config;
  }
}

export default ConfigError;
