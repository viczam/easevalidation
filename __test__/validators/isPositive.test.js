import { validators, test } from '../../src';

const { isPositive, isNumber } = validators;

describe('validators', () => {
  it('isPositive', () => {
    expect(test(isPositive())(1)).toBeTruthy();
    expect(test(isPositive(false))(0)).toBeTruthy();
    expect(test(isPositive())(0)).toBeFalsy();
    expect(test(isPositive())(-1)).toBeFalsy();
    expect(test(isNumber(), isPositive())('-1')).toBeFalsy();
    expect(test(isNumber(), isPositive())('1.211')).toBeTruthy();
  });
});
