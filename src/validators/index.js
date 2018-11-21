import isArguments from 'lodash/isArguments';
import isArrayBuffer from 'lodash/isArrayBuffer';
import isArrayLike from 'lodash/isArrayLike';
import isArrayLikeObject from 'lodash/isArrayLikeObject';
import isBoolean from 'lodash/isBoolean';
import isBuffer from 'lodash/isBuffer';
import isDate from 'lodash/isDate';
import isElement from 'lodash/isElement';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import isEqualWith from 'lodash/isEqualWith';
import isError from 'lodash/isError';
import isFinite from 'lodash/isFinite';
import isFunction from 'lodash/isFunction';
import isInteger from 'lodash/isInteger';
import isLength from 'lodash/isLength';
import isMap from 'lodash/isMap';
import isMatch from 'lodash/isMatch';
import isMatchWith from 'lodash/isMatchWith';
import isNaN from 'lodash/isNaN';
import isNative from 'lodash/isNative';
import isNil from 'lodash/isNil';
import isNull from 'lodash/isNull';
import isNumber from 'lodash/isNumber';
import isObjectLike from 'lodash/isObjectLike';
import isPlainObject from 'lodash/isPlainObject';
import isRegExp from 'lodash/isRegExp';
import isSafeInteger from 'lodash/isSafeInteger';
import isSet from 'lodash/isSet';
import isString from 'lodash/isString';
import isSymbol from 'lodash/isSymbol';
import isTypedArray from 'lodash/isTypedArray';
import isUndefined from 'lodash/isUndefined';
import isWeakMap from 'lodash/isWeakMap';
import isWeakSet from 'lodash/isWeakSet';
import validators from 'validator';
import any from './any';
import every from './every';
import isObject from './isObject';
import isArray from './isArray';
import isExclusiveMaximum from './isExclusiveMaximum';
import isExclusiveMinimum from './isExclusiveMinimum';
import isIntanceOf from './isIntanceOf';
import isMaximum from './isMaximum';
import isMaxLength from './isMaxLength';
import isMinimum from './isMinimum';
import isMinLength from './isMinLength';
import isOneOf from './isOneOf';
import isProperty from './isProperty';
import isRegexMatch from './isRegexMatch';
import isRequired from './isRequired';
import isValid from './isValid';
import isValidNumber from './isValidNumber';
import createValidators from '../createValidators';

export default createValidators({
  isArguments,
  isArrayBuffer,
  isArrayLike,
  isArrayLikeObject,
  isBoolean,
  isBuffer,
  isDate,
  isElement,
  isEmpty,
  isEqual,
  isEqualWith,
  isError,
  isFinite,
  isFunction,
  isInteger,
  isLength,
  isMap,
  isMatch,
  isMatchWith,
  isNaN,
  isNative,
  isNil,
  isNull,
  isNumber,
  isObject,
  isObjectLike,
  isPlainObject,
  isRegExp,
  isSafeInteger,
  isSet,
  isString,
  isSymbol,
  isTypedArray,
  isUndefined,
  isWeakMap,
  isWeakSet,
  any,
  every,
  isArray,
  isExclusiveMaximum,
  isExclusiveMinimum,
  isIntanceOf,
  isMaximum,
  isMaxLength,
  isMinimum,
  isMinLength,
  isOneOf,
  isProperty,
  isRegexMatch,
  isRequired,
  isValid,
  isValidNumber,
  ...validators,
});
