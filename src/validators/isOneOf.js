import { createValidator } from '..';

export default createValidator('isOneOf', (value, options) => options.includes(value));
