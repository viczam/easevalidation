import { validators, test } from '../src';

const { isNumber, isPositive, isPrecision, isNegative, isTruthy, isFalsy } = validators;

describe('validators', () => {
  it('isNumber', () => {
    expect(test(isNumber())(1)).toBeTruthy();
    expect(test(isNumber())(1.2)).toBeTruthy();
    expect(test(isNumber())('1.2141')).toBeTruthy();
    expect(test(isNumber(false))('1.2141')).toBeFalsy();
    expect(test(isNumber())({})).toBeFalsy();
  });

  it('isPositive', () => {
    expect(test(isPositive())(1)).toBeTruthy();
    expect(test(isPositive(false))(0)).toBeTruthy();
    expect(test(isPositive())(0)).toBeFalsy();
    expect(test(isPositive())(-1)).toBeFalsy();
    expect(test(isNumber(), isPositive())('-1')).toBeFalsy();
    expect(test(isNumber(), isPositive())('1.211')).toBeTruthy();
  });

  it('isNegative', () => {
    expect(test(isNegative())(-1)).toBeTruthy();
    expect(test(isNegative(false))(0)).toBeTruthy();
    expect(test(isNegative())(0)).toBeFalsy();
    expect(test(isNegative())(1)).toBeFalsy();
    expect(test(isNumber(), isNegative())('1')).toBeFalsy();
    expect(test(isNumber(), isNegative())('-1.211')).toBeTruthy();
  });

  it('isPrecision', () => {
    expect(test(isPrecision(0))(1)).toBeTruthy();
    expect(test(isPrecision(1))(1.1)).toBeTruthy();
    expect(test(isPrecision(5))(1.12345)).toBeTruthy();
    expect(test(isPrecision(5))(-1.12345)).toBeTruthy();
    expect(test(isNumber(), isPrecision(5))('-1.12345')).toBeTruthy();
  });

  it('isTruthy', () => {
    expect(test(isTruthy())(true)).toBeTruthy();
    expect(test(isTruthy())(false)).toBeFalsy();
    expect(test(isTruthy())({})).toBeTruthy();
    expect(test(isTruthy())('')).toBeFalsy();
    expect(test(isTruthy())(0)).toBeFalsy();
  });

  it('isFalsy', () => {
    expect(test(isFalsy())(false)).toBeTruthy();
    expect(test(isFalsy())(true)).toBeFalsy();
    expect(test(isFalsy())({})).toBeFalsy();
    expect(test(isFalsy())('')).toBeTruthy();
    expect(test(isFalsy())(0)).toBeTruthy();
  });
});
