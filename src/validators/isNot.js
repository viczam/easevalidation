import { test, createValidator } from '..';

export default createValidator('isNot', (value, ...validators) => !test(...validators)(value));
