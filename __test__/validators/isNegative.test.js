import { validators, test } from '../../src';

const { isNegative, isNumber } = validators;

describe('validators', () => {
  it('isNegative', () => {
    expect(test(isNegative())(-1)).toBeTruthy();
    expect(test(isNegative(false))(0)).toBeTruthy();
    expect(test(isNegative())(0)).toBeFalsy();
    expect(test(isNegative())(1)).toBeFalsy();
    expect(test(isNumber(), isNegative())('1')).toBeFalsy();
    expect(test(isNumber(), isNegative())('-1.211')).toBeTruthy();
  });
});
