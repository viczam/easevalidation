import { validators, test } from '../../src';

const { isTernary, isNumber, isMin, isString, isEvery, isLength } = validators;

describe('validators', () => {
  it('isTernary', () => {
    expect(test(isTernary(isNumber(), isMin(100), isString()))(101)).toBeTruthy();
    expect(test(isTernary(isNumber(), isMin(100), isString()))(99)).toBeFalsy();
    expect(
      test(isTernary(isNumber(), isMin(100), isEvery(isString(), isLength({ min: 5 }))))('abc'),
    ).toBeFalsy();
    expect(
      test(isTernary(isNumber(), isMin(100), isEvery(isString(), isLength({ min: 5 }))))('abcde'),
    ).toBeTruthy();
  });
});
