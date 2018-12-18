import { validators, test, validate } from '../../src';

const { isValid } = validators;

describe('validators', () => {
  it('isValid', () => {
    expect(test(isValid(() => true))('a')).toBeTruthy();
    expect(test(isValid(() => false))('a')).toBeFalsy();
    expect(test(isValid(val => val))(true)).toBeTruthy();
    expect(test(isValid(val => val))(false)).toBeFalsy();
  });

  it('isValid with custom message', () => {
    expect(() => validate(isValid(() => false, 'meh'))('a')).toThrow(/meh/);
  });
});
