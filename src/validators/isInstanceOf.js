import createValidator from '../createValidator';

export default createValidator('isInstanceOf', (value, obj) => value instanceof obj);
