import isArguments from 'lodash/isArguments';
import isObject from 'lodash/isObject';
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
import validatorsJs from 'validator';
import isAny from './isAny';
import isEvery from './isEvery';
import isSchema from './isSchema';
import isArray from './isArray';
import isInstanceOf from './isInstanceOf';
import isMax from './isMax';
import isMaxLength from './isMaxLength';
import isMin from './isMin';
import isMinLength from './isMinLength';
import isOneOf from './isOneOf';
import isProperty from './isProperty';
import isPropertyEqual from './isPropertyEqual';
import isRequired from './isRequired';
import isValid from './isValid';
import isValidNumber from './isValidNumber';
import isCloseTo from './isCloseTo';
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
  isAny,
  isEvery,
  isArray,
  isInstanceOf,
  isMax,
  isMaxLength,
  isMin,
  isMinLength,
  isOneOf,
  isProperty,
  isPropertyEqual,
  isRequired,
  isValid,
  isValidNumber,
  isCloseTo,
  isObject,
  isSchema,
  ...validatorsJs,
});
