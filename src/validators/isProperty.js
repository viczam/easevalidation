import flatten from 'lodash/flatten';
import test from '../test';

export default (value, property, ...validators) =>
  typeof value[property] !== 'undefined' && test(...flatten(validators))(value[property]);
