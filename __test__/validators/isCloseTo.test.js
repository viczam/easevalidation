import { validators, test } from '../../src';

const { isCloseTo } = validators;

describe('validators', () => {
  it('isCloseTo', () => {
    expect(test(isCloseTo(0.3))(0.1 + 0.2)).toBeTruthy();
    expect(test(isCloseTo(0.3))(0.1 + 0.21)).toBeFalsy();
  });
});
