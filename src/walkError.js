const walkError = error => {
  if (Array.isArray(error)) {
    return error.map(walkError);
  }

  if (!error.code || !error.error) {
    return error;
  }

  if (error.code === 'isSchema' && error.error) {
    return Object.keys(error.error).reduce(
      (acc, key) => ({
        ...acc,
        [key]: walkError(error.error[key]),
      }),
      {},
    );
  }

  return error;
};

export default walkError;
