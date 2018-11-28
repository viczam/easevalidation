import { validators, test } from '../../src';

const { isArray, isNumber, isPositive } = validators;

describe('validators', () => {
  it('isArray', () => {
    expect(test(isArray())([])).toBeTruthy();
    expect(test(isArray())([1, 2, 3])).toBeTruthy();
    expect(test(isArray())('fsafa')).toBeFalsy();
    expect(test(isArray(isNumber()))([1, 2, 3])).toBeTruthy();
    expect(test(isArray(isNumber()))([1, 'a', 3])).toBeFalsy();
    expect(test(isArray(isNumber(), isPositive()))([1, 2, 3])).toBeTruthy();
    expect(test(isArray(isNumber(), isPositive()))([1, -2, 3])).toBeFalsy();
  });
});
