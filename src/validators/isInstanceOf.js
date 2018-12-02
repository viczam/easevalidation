import { createValidator } from '..';

export default createValidator('isInstanceOf', (value, obj) => value instanceof obj);
