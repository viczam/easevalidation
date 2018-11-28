import { validators, test } from '../../src';

const { isFalsy } = validators;

describe('validators', () => {
  it('isFalsy', () => {
    expect(test(isFalsy())(false)).toBeTruthy();
    expect(test(isFalsy())(true)).toBeFalsy();
    expect(test(isFalsy())({})).toBeFalsy();
    expect(test(isFalsy())('')).toBeTruthy();
    expect(test(isFalsy())(0)).toBeTruthy();
  });
});
