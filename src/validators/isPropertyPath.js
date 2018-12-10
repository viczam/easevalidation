import get from 'lodash/get';
import set from 'lodash/set';
import validate from '../validate';
import createValidator from '../createValidator';

/**
 * test(
 *   isPropertyPath('name.first', isString())
 * )({
 *   name: {
 *     first: 'john'
 *   }
 * })
 */
export default createValidator('isPropertyPath', (value, path, ...validators) => {
  const val = validate(...validators)(get(value, path));

  if (typeof val !== 'undefined') {
    set(value, path, val);
  }

  return true;
});
