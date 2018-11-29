import { validate, formatError, validators as v, ValidationError } from '../src';

describe('ValidationError', () => {
  it('when running a simple validator', () => {
    try {
      validate(v.isNumber())('abc');
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBeInstanceOf(ValidationError);
      expect(error).toMatchInlineSnapshot(
        `[ValidationError: Failed passing "isNumber" validator!]`,
      );
      expect(error.value).toBe('abc');
      expect(error.code).toBe('isNumber');
      expect(error.config).toEqual([]);
    }
  });

  it('when running isSchema', () => {
    try {
      validate(
        v.isSchema({
          name: [v.isRequired(), v.isString()],
          age: [v.isRequired(), v.isNumber()],
          location: v.isSchema({
            lat: [v.isRequired(), v.isNumber()],
            lng: [v.isRequired(), v.isNumber()],
          }),
        }),
      )({
        age: 'fsafa',
        location: {},
      });
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBeInstanceOf(ValidationError);
      expect(error).toMatchInlineSnapshot(
        `[ValidationError: Failed passing "isSchema" validator!]`,
      );
      expect(error.error).toMatchInlineSnapshot(`
Object {
  "age": [ValidationError: Failed passing "isNumber" validator!],
  "location": [ValidationError: Failed passing "isSchema" validator!],
  "name": [ValidationError: Failed passing "isRequired" validator!],
}
`);

      expect(formatError(error)).toMatchInlineSnapshot(`
Object {
  "age": [ValidationError: Failed passing "isNumber" validator!],
  "location": Object {
    "lat": [ValidationError: Failed passing "isRequired" validator!],
    "lng": [ValidationError: Failed passing "isRequired" validator!],
  },
  "name": [ValidationError: Failed passing "isRequired" validator!],
}
`);
    }
  });
});