import flatten from 'lodash/flatten';
import validate from '../validate';
import createValidator from '../createValidator';

export default createValidator('isProperty', (value, property, ...validators) => {
  if (typeof value[property] === 'undefined') {
    return false;
  }

  Object.assign(value, {
    [property]: validate(...flatten(validators))(value[property]),
  });

  return true;
});
