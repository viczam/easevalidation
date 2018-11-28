import { validators, test } from '../../src';

const { isValid } = validators;

describe('validators', () => {
  it('isValid', () => {
    expect(test(isValid(() => true))('a')).toBeTruthy();
    expect(test(isValid(() => false))('a')).toBeFalsy();
    expect(test(isValid(val => val))(true)).toBeTruthy();
    expect(test(isValid(val => val))(false)).toBeFalsy();
  });
});
