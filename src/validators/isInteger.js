import isInteger from 'lodash/isInteger';
import createValidator from '../createValidator';

export default createValidator('isInteger', value => isInteger(Number(value)));
