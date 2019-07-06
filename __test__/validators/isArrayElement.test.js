import { validators, test } from '../../src';

const { isArrayElement, isNumber, isString, isMin } = validators;

describe('validators', () => {
  it('isArrayElement', () => {
    expect(test(isArrayElement(0, isNumber()))([1])).toBeTruthy();
    expect(test(isArrayElement(0, isNumber()))(['nope'])).toBeFalsy();
    expect(test(isArrayElement(1, isNumber()))([1])).toBeFalsy();
    expect(test(isArrayElement(0, isString()))(['yes', 1])).toBeTruthy();
    expect(
      test(isArrayElement(0, isString()), isArrayElement(1, isNumber(), isMin(5)))(['yes', 5]),
    ).toBeTruthy();
    // expect(test(isArray())([1, 2, 3])).toBeTruthy();
    // expect(test(isArray())('fsafa')).toBeFalsy();
    // expect(test(isArray(isNumber()))([1, 2, 3])).toBeTruthy();
    // expect(test(isArray(isNumber()))([1, 'a', 3])).toBeFalsy();
    // expect(test(isArray(isNumber(), isPositive()))([1, 2, 3])).toBeTruthy();
    // expect(test(isArray(isNumber(), isPositive()))([1, -2, 3])).toBeFalsy();
  });
});
