import test from '../test';
import createValidator from '../createValidator';
import isObject from './isObject';
import isProperty from './isProperty';
import isEqual from './isEqual';
import isAny from './isAny';
import isArray from './isArray';
import isOneOf from './isOneOf';

export default createValidator('isJSONSchema', value =>
  test(
    isObject(),
    isProperty('type', isAny(isEqual('object'), isArray(isOneOf('object')))),
    isProperty('properties', isObject()),
  )(value),
);