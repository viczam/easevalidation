import test from '../test';

export default (value, ...validators) => test(...validators)(value);
