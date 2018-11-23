import flatten from 'lodash/flatten';
import test from '../test';

export default (value, ...validators) =>
  flatten(validators).every(validator => test(validator)(value));
