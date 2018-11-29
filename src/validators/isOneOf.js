import createValidator from '../createValidator';

export default createValidator('isOneOf', (value, options) => options.includes(value));
