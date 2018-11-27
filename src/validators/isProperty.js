import flatten from 'lodash/flatten';
import validate from '../validate';

export default (value, property, ...validators) => {
  if (typeof value[property] === 'undefined') {
    return false;
  }

  Object.assign(value, {
    [property]: validate(...flatten(validators))(value[property]),
  });

  return true;
};
