import { createValidators } from '../src';

describe('createValidators', () => {
  let validators;

  beforeEach(() => {
    validators = createValidators({
      isOdd: value => value % 2,
      isBetween: (value, min, max) => min <= value && value <= max,
    });
  });

  it('will create a map of validators', () => {
    expect(typeof validators).toBe('object');
  });

  it('validators can be referenced properly', () => {
    expect(() => validators.isOdd()(3)).not.toThrow();
    expect(() => validators.isBetween(10, 15)(10)).not.toThrow();
  });
});
