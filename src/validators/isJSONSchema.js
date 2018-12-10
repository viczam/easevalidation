import test from '../test';
import { createValidator } from '..';
import isObject from './isObject';
import isProperty from './isProperty';
import isEqual from './isEqual';
import isAny from './isAny';
import isArray from './isArray';
import isEvery from './isEvery';
import isValid from './isValid';

const isJSONSchema = test(
  isObject(),
  isProperty(
    'type',
    isAny(isEqual('object'), isEvery(isArray(), isValid(value => value.includes('object')))),
  ),
  isProperty('properties', isObject()),
);

export default createValidator('isJSONSchema', isJSONSchema);
