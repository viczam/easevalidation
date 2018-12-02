import { test, validate, validators, createValidator, number, string, object } from '../src';

const {
  isSchema,
  isString,
  isNumber,
  isLength,
  isRequired,
  isMin,
  isMax,
  isAlpha,
  isEqual,
  isPlainObject,
  isProperty,
  isFinite,
  isEmail,
} = validators;

const isOdd = createValidator('isOdd', value => value % 2);
const isEven = createValidator('isEven', value => !test(isOdd())(value));

describe('playground', () => {
  it('should throw error', () => {
    expect(() => validate(isOdd())(2)).toThrow(/isOdd/);
  });

  it('should validate number', () => {
    expect(test(isNumber(), isMin(3), isMax(5), isEven(), isFinite())(4)).toBeTruthy();
  });

  it('should validate number using a chained validator', () => {
    expect(
      number()
        .extend({
          isEven,
        })
        .isMin(3)
        .isMax(5)
        .isEven()
        .isFinite(),
    ).toBeTruthy();
  });

  it('validate emails', () => {
    expect(test(isEmail())('zamfir.victor@gmail.com')).toBeTruthy();
  });

  it('should validate object by schema', () => {
    expect(
      test(
        isSchema({
          firstName: [isString(), isLength({ min: 3 })],
          lastName: [isString(), isLength({ min: 3 })],
          age: [isNumber(), isMin(20), isMax(22)],
          location: isSchema({
            address: [isString(), isLength({ min: 5 })],
            lat: [isRequired(), isNumber()],
            lng: [isRequired(), isNumber()],
            something: isSchema({
              bleah: [isRequired(), isString(), isAlpha()],
            }),
          }),
          password: [isString(), isEqual('test')],
        }),
      )({
        firstName: 'victor',
        lastName: 'zamfir',
        age: 21,
        location: {
          address: 'this is my address',
          lat: 10,
          lng: 100,
          something: {
            bleah: 'fsafa',
          },
        },
        password: 'test',
      }),
    ).toBeTruthy();
  });

  it('should validate object by another type of schema', () => {
    expect(
      test(
        isPlainObject(),
        isProperty('firstName', isString(), isLength({ min: 3 })),
        isProperty('lastName', isString(), isLength({ min: 3 })),
        isProperty('age', isNumber(), isMin(20), isMax(22)),
        isProperty(
          'location',
          isPlainObject(),
          isProperty('address', isString(), isLength({ min: 5 })),
          isProperty('lat', isRequired(), isNumber()),
          isProperty('lng', isRequired(), isNumber()),
          isProperty(
            'something',
            isPlainObject(),
            isProperty('bleah', isRequired(), isString(), isAlpha()),
          ),
        ),
        isProperty('password', isString(), isEqual('test')),
      )({
        firstName: 'victor',
        lastName: 'zamfir',
        age: 21,
        location: {
          address: 'this is my address',
          lat: 10,
          lng: 100,
          something: {
            bleah: 'fsafa',
          },
        },
        password: 'test',
      }),
    ).toBeTruthy();
  });

  it('should validate object by schema built with chained validators', () => {
    expect(
      test(
        object().isSchema({
          firstName: string().isLength({ min: 3 }),
          lastName: string().isLength({ min: 3 }),
          age: number()
            .isMin(20)
            .isMax(22),
          location: object().isSchema({
            address: string().isLength({ min: 5 }),
            lat: number().isMin(0),
            lng: number().isMin(0),
            something: object().isSchema({
              bleah: string()
                .isRequired()
                .isAlpha(),
            }),
          }),
          password: string().isEqual('test'),
        }),
      )({
        firstName: 'victor',
        lastName: 'zamfir',
        age: 21,
        location: {
          address: 'this is my address',
          lat: 10,
          lng: 100,
          something: {
            bleah: 'fsafa',
          },
        },
        password: 'test',
      }),
    ).toBeTruthy();
  });

  it('when failing, validate.error should be present', () => {
    const validateFn = test(isNumber(), isMin(10), isMax(15));
    expect(validateFn(9)).toBeFalsy();
    expect(validateFn.error).toBeDefined();
    expect(validateFn.error.message).toMatch(/isMin/);
  });
});
