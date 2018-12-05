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
  "config": Array [
    Object {
      "age": Array [
        Object {
          "code": "isRequired",
          "config": Array [],
        },
        Object {
          "code": "isNumber",
          "config": Array [],
        },
      ],
      "location": Object {
        "code": "isSchema",
        "config": Array [
          Object {
            "lat": Array [
              [Function],
              [Function],
            ],
            "lng": Array [
              [Function],
              [Function],
            ],
          },
        ],
      },
      "name": Array [
        Object {
          "code": "isRequired",
          "config": Array [],
        },
        Object {
          "code": "isString",
          "config": Array [],
        },
      ],
    },
  ],
  "error": Object {
    "age": Object {
      "code": "isNumber",
      "config": Array [],
      "error": undefined,
    },
    "location": Object {
      "code": "isSchema",
      "config": Array [
        Object {
          "lat": Array [
            Object {
              "code": "isRequired",
              "config": Array [],
            },
            Object {
              "code": "isNumber",
              "config": Array [],
            },
          ],
          "lng": Array [
            Object {
              "code": "isRequired",
              "config": Array [],
            },
            Object {
              "code": "isNumber",
              "config": Array [],
            },
          ],
        },
      ],
      "error": Object {
        "lat": Object {
          "code": "isNumber",
          "config": Array [],
          "error": undefined,
        },
        "lng": Object {
          "code": "isRequired",
          "config": Array [],
          "error": undefined,
        },
      },
    },
    "name": Object {
      "code": "isRequired",
      "config": Array [],
      "error": undefined,
    },
  },
}
`);

      expect(formatError(error)).toMatchInlineSnapshot(`
Object {
  "code": "isSchema",
  "config": Array [
    Object {
      "age": Array [
        Object {
          "code": "isRequired",
          "config": Array [],
        },
        Object {
          "code": "isNumber",
          "config": Array [],
        },
      ],
      "location": Object {
        "code": "isSchema",
        "config": Array [
          Object {
            "lat": Array [
              [Function],
              [Function],
            ],
            "lng": Array [
              [Function],
              [Function],
            ],
          },
        ],
      },
      "name": Array [
        Object {
          "code": "isRequired",
          "config": Array [],
        },
        Object {
          "code": "isString",
          "config": Array [],
        },
      ],
    },
  ],
  "error": Object {
    "age": Object {
      "code": "isNumber",
      "config": Array [],
      "error": undefined,
    },
    "location": Object {
      "code": "isSchema",
      "config": Array [
        Object {
          "lat": Array [
            Object {
              "code": "isRequired",
              "config": Array [],
            },
            Object {
              "code": "isNumber",
              "config": Array [],
            },
          ],
          "lng": Array [
            Object {
              "code": "isRequired",
              "config": Array [],
            },
            Object {
              "code": "isNumber",
              "config": Array [],
            },
          ],
        },
      ],
      "error": Object {
        "lat": Object {
          "code": "isNumber",
          "config": Array [],
          "error": undefined,
        },
        "lng": Object {
          "code": "isRequired",
          "config": Array [],
          "error": undefined,
        },
      },
    },
    "name": Object {
      "code": "isRequired",
      "config": Array [],
      "error": undefined,
    },
  },
}
`);
    }
  });
});
