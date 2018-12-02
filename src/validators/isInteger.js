import isInteger from 'lodash/isInteger';
import { createValidator } from '..';

export default createValidator('isInteger', value => isInteger(Number(value)));
