const walkError = error => {
  if (Array.isArray(error)) {
    return error.map(walkError);
  }

  if (!error.code || !error.error) {
    return error;
  }

  if (error.code === 'isProperty') {
    return {
      [error.config[0]]: error.error ? walkError(error.error) : error,
    };
  }

  if (error.code === 'isObject' && error.error) {
    return Object.keys(error.error).reduce(
      (acc, key) => ({
        ...acc,
        [key]: walkError(error.error[key]),
      }),
      {},
    );
  }

  if (error.code === 'every') {
    return walkError(error.error);
  }

  return error;
};

export default walkError;
