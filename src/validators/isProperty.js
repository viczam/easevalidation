import test from '../test';

export default (value, property, ...validators) =>
  typeof value[property] !== 'undefined' && test(...validators)(value[property]);
