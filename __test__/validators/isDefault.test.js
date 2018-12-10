import { validators, validate } from '../../src';

const { isDefault } = validators;

describe('validators', () => {
  it('isDefault', () => {
    expect(validate(isDefault(3))()).toBe(3);
    expect(validate(isDefault(3))(4)).toBe(4);
  });
});
