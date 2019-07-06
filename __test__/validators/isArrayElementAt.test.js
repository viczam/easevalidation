import { validators, test } from '../../src';

const { isArrayElementAt, isNumber, isString, isMin } = validators;

describe('validators', () => {
  it('isArrayElementAt', () => {
    expect(test(isArrayElementAt(0, isNumber()))([1])).toBeTruthy();
    expect(test(isArrayElementAt(0, isNumber()))(['nope'])).toBeFalsy();
    expect(test(isArrayElementAt(1, isNumber()))([1])).toBeFalsy();
    expect(test(isArrayElementAt(0, isString()))(['yes', 1])).toBeTruthy();
    expect(
      test(isArrayElementAt(0, isString()), isArrayElementAt(1, isNumber(), isMin(5)))(['yes', 5]),
    ).toBeTruthy();
  });
});
