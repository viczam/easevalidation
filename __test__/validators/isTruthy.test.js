import { validators, test } from '../../src';

const { isTruthy } = validators;

describe('validators', () => {
  it('isTruthy', () => {
    expect(test(isTruthy())(true)).toBeTruthy();
    expect(test(isTruthy())(false)).toBeFalsy();
    expect(test(isTruthy())({})).toBeTruthy();
    expect(test(isTruthy())('')).toBeFalsy();
    expect(test(isTruthy())(0)).toBeFalsy();
  });
});
