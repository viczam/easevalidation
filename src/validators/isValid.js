import createValidator from '../createValidator';

export default createValidator('isValid', (value, test) => test(value));
