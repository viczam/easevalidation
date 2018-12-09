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
        location: {
          lat: 'abc',
        },
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
  "code": "isSchema",
  "error": Object {
    "age": Object {
      "code": "isNumber",
    },
    "location": Object {
      "code": "isSchema",
      "error": Object {
        "lat": Object {
          "code": "isNumber",
        },
        "lng": Object {
          "code": "isRequired",
        },
      },
    },
    "name": Object {
      "code": "isRequired",
    },
  },
}
`);
    }

    try {
      validate(
        v.isAny(
          v.isString(),
          v.isEvery(
            v.isSchema({
              before: v.isAny(v.isString(), v.isUndefined()),
              after: v.isAny(v.isString(), v.isUndefined()),
            }),
            v.isObject({
              length: 1,
              validator: v.isEvery(v.isRequired(), v.isString()),
            }),
          ),
        ),
      )({
        before: 'bfr',
        after: 'aftr',
      });
    } catch (error) {
      expect(formatError(error)).toMatchInlineSnapshot(`
Object {
  "code": "isAny",
  "config": Array [
    Object {
      "code": "isString",
    },
    Object {
      "code": "isEvery",
      "config": Array [
        Object {
          "code": "isSchema",
          "config": Array [
            Object {
              "after": Object {
                "code": "isAny",
                "config": Array [
                  Object {
                    "code": "isString",
                  },
                  Object {
                    "code": "isUndefined",
                  },
                ],
              },
              "before": Object {
                "code": "isAny",
                "config": Array [
                  Object {
                    "code": "isString",
                  },
                  Object {
                    "code": "isUndefined",
                  },
                ],
              },
            },
          ],
        },
        Object {
          "code": "isObject",
          "config": Array [
            Object {
              "length": 1,
              "validator": Object {
                "code": "isEvery",
                "config": Array [
                  Object {
                    "code": "isRequired",
                  },
                  Object {
                    "code": "isString",
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
}
`);
    }
  });
});
