import isNumber from 'lodash/isNumber';
import toNumber from 'lodash/toNumber';
import { createValidator } from '..';

export default createValidator('isNumber', (value, cast = true) => ({
  isValid: cast ? !Number.isNaN(Number(value)) : isNumber(value),
  value: cast ? toNumber(value) : value,
}));
