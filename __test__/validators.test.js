import { validators, test } from '../src';

const {
  isNumber,
  isPositive,
  isPrecision,
  isNegative,
  isTruthy,
  isFalsy,
  isArray,
  isOneOf,
  isValid,
  isSchema,
  isRequired,
  isString,
  isMin,
} = validators;

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

  it('isArray', () => {
    expect(test(isArray())([])).toBeTruthy();
    expect(test(isArray())([1, 2, 3])).toBeTruthy();
    expect(test(isArray())('fsafa')).toBeFalsy();
    expect(test(isArray(isNumber()))([1, 2, 3])).toBeTruthy();
    expect(test(isArray(isNumber()))([1, 'a', 3])).toBeFalsy();
    expect(test(isArray(isNumber(), isPositive()))([1, 2, 3])).toBeTruthy();
    expect(test(isArray(isNumber(), isPositive()))([1, -2, 3])).toBeFalsy();
  });

  it('isOneOf', () => {
    expect(test(isOneOf(['a', 'b']))('a')).toBeTruthy();
    expect(test(isOneOf(['a', 'b']))('c')).toBeFalsy();
    expect(test(isOneOf([1, 2]))(2)).toBeTruthy();
    expect(test(isOneOf([1, 2]))('2')).toBeFalsy();
  });

  it('isValid', () => {
    expect(test(isValid(() => true))('a')).toBeTruthy();
    expect(test(isValid(() => false))('a')).toBeFalsy();
    expect(test(isValid(val => val))(true)).toBeTruthy();
    expect(test(isValid(val => val))(false)).toBeFalsy();
  });

  it('isSchema', () => {
    expect(
      test(
        isSchema({
          name: [isRequired(), isString()],
          age: [isNumber(), isMin(18)],
        }),
      )({
        name: 'John Doe',
        age: 20,
      }),
    ).toBeTruthy();

    expect(
      test(
        isSchema({
          name: [isRequired(), isString()],
          age: [isNumber(), isMin(18)],
        }),
      )({
        name: 'John Doe',
        age: 17,
      }),
    ).toBeFalsy();
  });
});