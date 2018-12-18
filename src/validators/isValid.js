import { createValidator } from '..';

export default createValidator('isValid', (value, test, message) => {
  if (!message) {
    return test(value);
  }

  if (!test(value)) {
    throw new Error(message);
  }

  return true;
});
