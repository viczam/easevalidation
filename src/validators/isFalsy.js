import createValidator from '../createValidator';

export default createValidator('isFalsy', value => !value);
