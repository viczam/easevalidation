import isNumber from 'lodash/isNumber';
import toNumber from 'lodash/toNumber';

export default (value, cast = true) => ({
  isValid: cast ? !Number.isNaN(Number(value)) : isNumber(value),
  value: cast ? toNumber(value) : value,
});
