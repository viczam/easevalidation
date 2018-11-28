import { validators, test } from '../../src';

const { isNumber } = validators;

describe('validators', () => {
  it('isNumber', () => {
    expect(test(isNumber())(1)).toBeTruthy();
    expect(test(isNumber())(1.2)).toBeTruthy();
    expect(test(isNumber())('1.2141')).toBeTruthy();
    expect(test(isNumber(false))('1.2141')).toBeFalsy();
    expect(test(isNumber())({})).toBeFalsy();
  });
});
