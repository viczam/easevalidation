import { createValidator, test, validators, number } from '../src';

const { isNumber, isMin, isMax } = validators;

describe('docs', () => {
  it('example 1', () => {
    expect(test(isNumber(), isMin(10), isMax(15))(13)).toBeTruthy();
  });

  it('example 2', () => {
    expect(
      test(
        number()
          .isMin(10)
          .isMax(15),
      )(13),
    ).toBeTruthy();

    expect(
      number()
        .isMin(10)
        .isMax(15)
        .test(13),
    ).toBeTruthy();
  });

  it('example 3', () => {
    const { isSchema, isEmail, isRequired, isString, isMinLength } = validators;
    const schema = isSchema({
      email: [isEmail()],
      password: [isRequired(), isString(), isMinLength(5)],
    });

    expect(
      test(schema)({
        email: 'me@gmail.com',
        password: '12345',
      }),
    ).toBeTruthy();
  });

  it('example 4', () => {
    const { isPlainObject, isProperty, isEmail, isRequired, isString, isMinLength } = validators;
    const schema = [
      isPlainObject(),
      isProperty('email', isEmail()),
      isProperty('password', isRequired(), isString(), isMinLength(5)),
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
