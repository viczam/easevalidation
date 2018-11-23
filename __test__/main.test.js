import { test, validate, validators as v, createValidator } from '../src';

const isOdd = createValidator('isOdd', value => value % 2);
const isEven = createValidator('isEven', value => !test(isOdd())(value));

describe('validators', () => {
  it('should throw error', () => {
    expect(() => isOdd()(2)).toThrow(/isOdd/);
  });

  it('should return error', () => {
    expect(validate(isOdd())(2)).toBeInstanceOf(Error);
    expect(validate(isOdd())(2).message).toMatch(/isOdd/);
  });

  it('should validate number', () => {
    expect(test(v.isNumber(), v.isMin(3), v.isMax(5), isEven(), v.isFinite())(4)).toBeTruthy();
  });

  it('should validate number using a chained validator', () => {
    expect(
      v
        .number()
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
    expect(test(v.isEmail())('zamfir.victor@gmail.com')).toBeTruthy();
  });

  it('should validate object by schema', () => {
    expect(
      test(
        v.isObject({
          firstName: [v.isString(), v.isMinLength(3)],
          lastName: [v.isString(), v.isMinLength(3)],
          age: [v.isNumber(), v.isMin(20), v.isMax(22)],
          location: v.isObject({
            address: [v.isString(), v.isMinLength(5)],
            lat: [v.isRequired(), v.isNumber()],
            lng: [v.isRequired(), v.isNumber()],
            something: v.isObject({
              bleah: [v.isRequired(), v.isString(), v.isAlpha()],
            }),
          }),
          password: [v.isString(), v.isEqual('test')],
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
        v.isPlainObject(),
        v.isProperty('firstName', v.isString(), v.isMinLength(3)),
        v.isProperty('lastName', v.isString(), v.isMinLength(3)),
        v.isProperty('age', v.isNumber(), v.isMin(20), v.isMax(22)),
        v.isProperty(
          'location',
          v.isPlainObject(),
          v.isProperty('address', v.isString(), v.isMinLength(5)),
          v.isProperty('lat', v.isRequired(), v.isNumber()),
          v.isProperty('lng', v.isRequired(), v.isNumber()),
          v.isProperty(
            'something',
            v.isPlainObject(),
            v.isProperty('bleah', v.isRequired(), v.isString(), v.isAlpha()),
          ),
        ),
        v.isProperty('password', v.isString(), v.isEqual('test')),
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
        v.object().isSchema({
          firstName: v.string().isMinLength(3),
          lastName: v.string().isMinLength(3),
          age: v
            .number()
            .isMin(20)
            .isMax(22),
          location: v.object().isSchema({
            address: v.string().isMinLength(5),
            lat: v.number().isMin(0),
            lng: v.number().isMin(0),
            something: v.object().isSchema({
              bleah: v
                .string()
                .isRequired()
                .isAlpha(),
            }),
          }),
          password: v.string().isEqual('test'),
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
});
