import isString from 'lodash/isString';
import toString from 'lodash/toString';
import isNumber from 'lodash/isNumber';
import { createValidator } from '..';

export default createValidator('isString', (value, cast = true) => ({
  isValid: cast ? isString(value) || isNumber(value) : isString(value),
  value: cast ? toString(value) : value,
}));
