/* eslint-disable no-underscore-dangle */
import { createComposedValidator, validators, test, validate } from '../src';

const { isEvery, isNumber, isFinite, isValid, isNot } = validators;

describe('createComposedValidator', () => {
  let isOdd;
  let isEven;

  beforeEach(() => {
    isOdd = createComposedValidator(
      'isOdd',
      isEvery(isNumber(), isFinite(), isValid(value => !!(value % 2))),
    );
    isEven = createComposedValidator('isEven', isEvery(isNumber(), isFinite(), isNot(isOdd())));
  });

  it('should create a new validator', () => {
    expect(typeof isOdd).toBe('function');
    expect(isOdd().__validation__).toBeDefined();
  });

  it('passes when value is valid', () => {
    expect(test(isOdd())(3)).toBeTruthy();
    expect(test(isOdd())('3')).toBeTruthy();
    expect(test(isOdd())(Number.POSITIVE_INFINITY)).toBeFalsy();
    expect(test(isOdd())(2)).toBeFalsy();
    expect(test(isEven())(3)).toBeFalsy();
    expect(test(isEven())(2)).toBeTruthy();
    expect(() => validate(isOdd())(2)).toThrow(/isOdd/);
    expect(() => validate(isOdd())(2)).toThrow(/isValid/);
    expect(() => validate(isOdd())('abc')).toThrow(/isNumber/);
  });
});
