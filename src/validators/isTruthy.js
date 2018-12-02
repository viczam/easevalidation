import { createValidator } from '..';

export default createValidator('isTruthy', value => !!value);
