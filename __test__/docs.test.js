import { createValidator, test, validators } from '../src';

const { isNumber, isMin, isMax } = validators;

describe('docs', () => {
  it('example 1', () => {
    expect(test(isNumber(), isMin(10), isMax(15))(13)).toBeTruthy();
  });

  it('example 3', () => {
    const { isSchema, isEmail, isRequired, isString, isLength } = validators;
    const schema = isSchema({
      email: [isEmail()],
      password: [
        isRequired(),
        isString(),
        isLength({
          min: 5,
        }),
      ],
    });

    expect(
      test(schema)({
        email: 'me@gmail.com',
        password: '12345',
      }),
    ).toBeTruthy();
  });

  it('example 4', () => {
    const { isPlainObject, isProperty, isEmail, isRequired, isString, isLength } = validators;
    const schema = [
      isPlainObject(),
      isProperty('email', isEmail()),
      isProperty('password', isRequired(), isString(), isLength({ min: 5 })),
    ];

    expect(
      test(schema)({
        email: 'me@gmail.com',
        password: '12345',
      }),
    ).toBeTruthy();
  });

  it('example 5', () => {
    const isBetween = createValidator(
      'isBetween',
      (value, min, max) => min <= value && value <= max,
    );

    expect(() => isBetween(10, 15)(10)).not.toThrow();
    expect(test(isBetween(10, 15))(10)).toBeTruthy();
  });
});
