import { validators, test } from '../../src';

const { isJSONSchema } = validators;

describe('validators', () => {
  it('isJSONSchema', () => {
    expect(
      test(isJSONSchema())({
        type: 'object',
        properties: {},
      }),
    ).toBeTruthy();

    expect(
      test(isJSONSchema())({
        type: ['object'],
        properties: {},
      }),
    ).toBeTruthy();

    expect(
      test(isJSONSchema())({
        type: ['objects'],
        properties: {},
      }),
    ).toBeFalsy();

    expect(test(isJSONSchema())({})).toBeFalsy();
  });
});
