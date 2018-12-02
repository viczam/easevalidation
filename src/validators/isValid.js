import { createValidator } from '..';

export default createValidator('isValid', (value, test) => test(value));
