import { test, validate, validators, createValidator, fromJSON } from '../src';

const {
  isNumber,
  isMinimum,
  isFinite,
  isMaximum,
  isEmail,
  isAlpha,
  isObject,
  isString,
  isMinLength,
  isRequired,
  isEqual,
  isPlainObject,
  isProperty,
} = validators;

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
    expect(test(isNumber(), isMinimum(3), isMaximum(5), isEven(), isFinite())(4)).toBeTruthy();
  });

  it('validate emails', () => {
    expect(test(isEmail())('zamfir.victor@gmail.com')).toBeTruthy();
  });

  it('should validate object by schema', () => {
    expect(
      test(
        isObject({
          firstName: [isString(), isMinLength(3)],
          lastName: [isString(), isMinLength(3)],
          age: [isNumber(), isMinimum(20), isMaximum(22)],
          location: isObject({
            address: [isString(), isMinLength(5)],
            lat: [isRequired(), isNumber()],
            lng: [isRequired(), isNumber()],
            something: isObject({
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
        isProperty('firstName', isString(), isMinLength(3)),
        isProperty('lastName', isString(), isMinLength(3)),
        isProperty('age', isNumber(), isMinimum(20), isMaximum(22)),
        isProperty(
          'location',
          isPlainObject(),
          isProperty('address', isString(), isMinLength(5)),
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

  it('fromJSON', () => {
    expect(
      test(
        fromJSON({
          code: 'isObject',
          config: {
            firstName: {
              code: 'schema',
              config: [
                {
                  code: 'isString',
                },
                {
                  code: 'isMinLength',
                  config: 3,
                },
              ],
            },
            age: {
              code: 'schema',
              config: {
                code: 'isRequired',
              },
            },
          },
        }),
      )({
        firstName: 'Victor',
        age: 32,
      }),
    ).toBeTruthy();
  });
});
