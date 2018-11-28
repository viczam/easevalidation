import { validators, test } from '../../src';

const { isPrecision, isNumber } = validators;

describe('validators', () => {
  it('isPrecision', () => {
    expect(test(isPrecision(0))(1)).toBeTruthy();
    expect(test(isPrecision(1))(1.1)).toBeTruthy();
    expect(test(isPrecision(5))(1.12345)).toBeTruthy();
    expect(test(isPrecision(5))(-1.12345)).toBeTruthy();
    expect(test(isNumber(), isPrecision(5))('-1.12345')).toBeTruthy();
  });
});
