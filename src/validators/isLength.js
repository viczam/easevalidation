import { createValidator } from '..';

export default createValidator('isLength', (value, length) => {
  const len = value.length;

  if (typeof length === 'object') {
    const isMin = typeof length.min === 'undefined' || len >= length.min;
    const isMax = typeof length.max === 'undefined' || len <= length.max;

    return isMin && isMax;
  }

  return len === length;
});
