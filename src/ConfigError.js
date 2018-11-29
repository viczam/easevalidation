class ConfigError extends Error {
  constructor({ code, error }) {
    super();
    this.name = `Invalid configuration for "${code}" validator!`;
    this.error = error;
    Error.captureStackTrace(this, ConfigError);
  }
}

export default ConfigError;
