import { createValidator } from '..';

export default createValidator('isFalsy', value => !value);
