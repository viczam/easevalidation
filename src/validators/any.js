import flatten from 'lodash/flatten';
import isValid from './isValid';

export default (value, ...validators) =>
  flatten(validators).some(validator => isValid(value, validator));
