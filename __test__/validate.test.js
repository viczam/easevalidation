import { validate, validators as v, ValidationError } from '../src';

describe('validate', () => {
  it('throws a ValidationError when it fails', () => {
    expect(() => validate(v.isNumber())('faafsa')).toThrow(/isNumber/);
    expect(() => validate(v.isNumber())('faafsa')).toThrow(ValidationError);
    expect(() => validate(v.isNumber())('faafsa')).toThrowErrorMatchingInlineSnapshot(
      `"Failed passing \\"isNumber\\" validator!"`,
    );
  });

  it('returns the parsed value when it passes', () => {
    expect(() => validate(v.isNumber())('2')).not.toThrow();
    expect(validate(v.isNumber())('2')).toBe(2);
  });
});
