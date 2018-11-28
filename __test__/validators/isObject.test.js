import { validators, validate, test } from '../../src';

const { isNumber, isString, isObject } = validators;

describe('validators', () => {
  it('isObject', () => {
    expect(test(isObject())({})).toBeTruthy();
    expect(test(isObject())('fsafsa')).toBeFalsy();
    expect(
      test(isObject({ min: 2 }))({
        p1: 'v1',
        p2: 'v2',
        p3: 'v3',
      }),
    ).toBeTruthy();
    expect(
      test(isObject({ min: 2 }))({
        p1: 'v1',
      }),
    ).toBeFalsy();
    expect(
      test(isObject({ max: 2 }))({
        p1: 'v1',
        p2: 'v2',
      }),
    ).toBeTruthy();
    expect(
      test(isObject({ max: 2 }))({
        p1: 'v1',
        p2: 'v2',
        p3: 'v3',
      }),
    ).toBeFalsy();
    expect(
      test(isObject({ validator: isString() }))({
        p1: 'v1',
        p2: 'v2',
        p3: 'v3',
      }),
    ).toBeTruthy();
    expect(
      test(isObject({ validator: isString(false) }))({
        p1: 'v1',
        p2: 'v2',
        p3: 3,
      }),
    ).toBeFalsy();
    expect(
      validate(isObject({ validator: isNumber() }))({
        p1: '1',
        p2: '2',
        p3: 3,
      }),
    ).toEqual({
      p1: 1,
      p2: 2,
      p3: 3,
    });
  });
});
