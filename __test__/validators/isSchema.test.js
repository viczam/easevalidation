import { validators, test, validate } from '../../src';

const { isSchema, isNumber, isRequired, isString, isMin, isAny, isUndefined } = validators;

describe('validators', () => {
  it('isSchema', () => {
    expect(
      test(
        isSchema({
          name: [isRequired(), isString()],
          age: [isNumber(), isMin(18)],
        }),
      )({
        name: 'John Doe',
        age: 20,
      }),
    ).toBeTruthy();

    expect(
      test(
        isSchema({
          name: [isRequired(), isString()],
          age: [isNumber(), isMin(18)],
        }),
      )({
        name: 'John Doe',
        age: 17,
      }),
    ).toBeFalsy();

    expect(
      validate(
        isSchema({
          name: isAny(isUndefined(), isString()),
        }),
      )({}),
    ).toMatchInlineSnapshot(`Object {}`);
  });
});
