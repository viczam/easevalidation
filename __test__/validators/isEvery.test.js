import { validators, validate } from '../../src';

const { isRequired, isDefault, isEvery, isString, isNumber, isSchema } = validators;

describe('validators', () => {
  it('isEvery', () => {
    expect(validate(isEvery(isNumber(), isString()))('3')).toBe('3');
    expect(
      validate(
        isEvery(
          isSchema({
            key1: [isRequired(), isString()],
          }),
          isEvery(
            isSchema({
              key3: [isDefault('value3'), isString()],
            }),
          ),
        ),
        isSchema({
          key2: [isRequired(), isString()],
        }),
      )({
        key1: 'value1',
        key2: 'value2',
      }),
    ).toEqual({
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
    });
  });
});
