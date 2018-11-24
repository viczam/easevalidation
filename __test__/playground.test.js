import { test, validate, validators as v, createValidator, number, string, object } from '../src';

const isOdd = createValidator('isOdd', value => value % 2);
const isEven = createValidator('isEven', value => !test(isOdd())(value));

describe('validators', () => {
  it('should return error', () => {
    expect(validate(isOdd())(2)).toBeInstanceOf(Error);
    expect(validate(isOdd())(2).message).toMatch(/isOdd/);
  });

  it('should validate number', () => {
    expect(test(v.isNumber(), v.isMin(3), v.isMax(5), isEven(), v.isFinite())(4)).toBeTruthy();
  });

  it('should validate number using a chained validator', () => {
    expect(
      number({
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
        v.isSchema({
          firstName: [v.isString(), v.isMinLength(3)],
          lastName: [v.isString(), v.isMinLength(3)],
          age: [v.isNumber(), v.isMin(20), v.isMax(22)],
          location: v.isSchema({
            address: [v.isString(), v.isMinLength(5)],
            lat: [v.isRequired(), v.isNumber()],
            lng: [v.isRequired(), v.isNumber()],
            something: v.isSchema({
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
        object().isSchema({
          firstName: string().isMinLength(3),
          lastName: string().isMinLength(3),
          age: number()
            .isMin(20)
            .isMax(22),
          location: object().isSchema({
            address: string().isMinLength(5),
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
    const validateFn = test(v.isNumber(), v.isMin(10), v.isMax(15));
    expect(validateFn(9)).toBeFalsy();
    expect(validateFn.error).toBeDefined();
    expect(validateFn.error.message).toMatch(/isMin/);
  });
});
