import { validators, validate, test } from '../../src';

const { isString, isNumber, isAny } = validators;

describe('validators', () => {
  it('isAny', () => {
    expect(test(isAny(isNumber(), isString()))(3)).toBeTruthy();
    expect(test(isAny(isNumber(), isString()))('abc')).toBeTruthy();
    expect(test(isAny(isNumber(), isString()))({})).toBeFalsy();
    expect(validate(isAny(isNumber(), isString()))('3')).toBe(3);
    expect(validate(isAny(isString(), isNumber()))('3')).toBe('3');
  });
});
