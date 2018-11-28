import { validators, test } from '../../src';

const { isOneOf } = validators;

describe('validators', () => {
  it('isOneOf', () => {
    expect(test(isOneOf(['a', 'b']))('a')).toBeTruthy();
    expect(test(isOneOf(['a', 'b']))('c')).toBeFalsy();
    expect(test(isOneOf([1, 2]))(2)).toBeTruthy();
    expect(test(isOneOf([1, 2]))('2')).toBeFalsy();
  });
});
