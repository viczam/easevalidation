import { createValidator, test } from '../src';

describe('test', () => {
  let isOdd;
  let isBetween;

  beforeEach(() => {
    isOdd = createValidator('isOdd', value => value % 2);
    isBetween = createValidator('isBetween', (value, min, max) => min <= value && value <= max);
  });

  it('returns a validation function if called with a single validator', () => {
    expect(typeof test(isOdd())).toBe('function');
  });

  it('returns a validation function if called with multiple validators', () => {
    expect(typeof test(isOdd(), isBetween(10, 15))).toBe('function');
  });

  it('returns true if the input passes the validators', () => {
    expect(test(isOdd())(3)).toBeTruthy();
    expect(test(isOdd(), isBetween(10, 15))(13)).toBeTruthy();
  });

  it('returns false if the input fails the validators', () => {
    expect(test(isOdd())(2)).toBeFalsy();
    expect(test(isOdd(), isBetween(10, 15))(3)).toBeFalsy();
  });

  it('will return false if one of the validators throws a random error', () => {
    expect(
      test(
        createValidator(() => {
          throw new Error();
        })(),
      )(),
    ).toBeFalsy();
  });
});
