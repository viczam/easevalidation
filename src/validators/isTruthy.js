import createValidator from '../createValidator';

export default createValidator('isTruthy', value => !!value);
