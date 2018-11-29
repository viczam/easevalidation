const formatError = error => {
  if (Array.isArray(error)) {
    return error.map(formatError);
  }

  if (!error.code || !error.error) {
    return error;
  }

  if (error.code === 'isSchema' && error.error) {
    return Object.keys(error.error).reduce(
      (acc, key) => ({
        ...acc,
        [key]: formatError(error.error[key]),
      }),
      {},
    );
  }

  return error;
};

export default formatError;
