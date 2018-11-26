import { createValidator, ValidationError } from '../src';

describe('createValidator', () => {
  let isOdd;
  let isBetween;

  beforeEach(() => {
    isOdd = createValidator('isOdd', value => !!(value % 2));
    isBetween = createValidator('isBetween', (value, min, max) => min <= value && value <= max);
  });

  it('create a new validator', () => {
    expect(typeof isOdd).toBe('function');
  });

  it('validators called with configuration data will return the test function', () => {
    expect(typeof isOdd()).toBe('function');
    expect(typeof isBetween(10, 15)).toBe('function');
  });

  it('validators will not throw if the data is valid', () => {
    expect(() => isOdd()(3)).not.toThrow();
    expect(() => isBetween(10, 15)(10)).not.toThrow();
  });

  it('validators will throw an error if the data is invalid', () => {
    expect(() => isOdd()(2)).toThrow(/isOdd/);
    expect(() => isBetween(10, 15)(16)).toThrow(/isBetween/);
    expect(() => isBetween(10, 15)(16)).toThrow(ValidationError);
  });

  it('validators called with valid input will return the passed in input', () => {
    expect(isOdd()(3)).toBe(3);
    expect(isBetween(10, 15)(13)).toBe(13);
  });

  it('will throw a ValidationError wrapping errors thrown in the validator', () => {
    expect(() =>
      createValidator(() => {
        throw new Error('works');
      })()(),
    ).toThrow('works');

    expect(() =>
      createValidator(() => {
        throw new Error();
      })()(),
    ).toThrow(ValidationError);
  });
});
