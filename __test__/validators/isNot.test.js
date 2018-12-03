import { validators, test } from '../../src';

const { isString, isNumber, isEmail, isNot } = validators;

describe('validators', () => {
  it('isNot', () => {
    expect(() => isNot(isNumber())('fsafa')).not.toThrow();
    expect(() => isNot(isNumber())(3)).toThrow();
    expect(() => isNot(isString(), isEmail())('fsafa')).not.toThrow();
    expect(() => isNot(isString(), isEmail())('john@gmail.com')).toThrow();
    expect(test(isString(), isNot(isEmail()))('test')).toBeTruthy();
    expect(test(isString(), isNot(isEmail()))('me@gmail.com')).toBeFalsy();
  });
});
