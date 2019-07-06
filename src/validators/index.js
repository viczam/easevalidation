/* eslint-disable import/no-cycle */
import pick from 'lodash/pick';
import isArguments from 'lodash/isArguments';
import isArrayBuffer from 'lodash/isArrayBuffer';
import isArrayLike from 'lodash/isArrayLike';
import isArrayLikeObject from 'lodash/isArrayLikeObject';
import isBoolean from 'lodash/isBoolean';
import isBuffer from 'lodash/isBuffer';
import isDate from 'lodash/isDate';
import isElement from 'lodash/isElement';
import isEmpty from 'lodash/isEmpty';
import isEqualWith from 'lodash/isEqualWith';
import isError from 'lodash/isError';
import isFinite from 'lodash/isFinite';
import isFunction from 'lodash/isFunction';
import isMap from 'lodash/isMap';
import isMatch from 'lodash/isMatch';
import isMatchWith from 'lodash/isMatchWith';
import isNaN from 'lodash/isNaN';
import isNative from 'lodash/isNative';
import isNil from 'lodash/isNil';
import isNull from 'lodash/isNull';
import isObjectLike from 'lodash/isObjectLike';
import isPlainObject from 'lodash/isPlainObject';
import isRegExp from 'lodash/isRegExp';
import isSafeInteger from 'lodash/isSafeInteger';
import isSet from 'lodash/isSet';
import isSymbol from 'lodash/isSymbol';
import isTypedArray from 'lodash/isTypedArray';
import isUndefined from 'lodash/isUndefined';
import isWeakMap from 'lodash/isWeakMap';
import isWeakSet from 'lodash/isWeakSet';
import validatorsJs from 'validator';
import isString from './isString';
import isNumber from './isNumber';
import isAny from './isAny';
import isEvery from './isEvery';
import isSchema from './isSchema';
import isArray from './isArray';
import isArrayElement from './isArrayElement';
import isInstanceOf from './isInstanceOf';
import isMax from './isMax';
import isLength from './isLength';
import isMin from './isMin';
import isOneOf from './isOneOf';
import isProperty from './isProperty';
import isPropertyEqual from './isPropertyEqual';
import isRequired from './isRequired';
import isValid from './isValid';
import isCloseTo from './isCloseTo';
import isInteger from './isInteger';
import isDefault from './isDefault';
import isTruthy from './isTruthy';
import isFalsy from './isFalsy';
import isPositive from './isPositive';
import isNegative from './isNegative';
import isPrecision from './isPrecision';
import isObject from './isObject';
import isEqual from './isEqual';
import isJSONSchema from './isJSONSchema';
import isNot from './isNot';
import isTernary from './isTernary';
import isPropertyPath from './isPropertyPath';
import createValidators from '../createValidators';

export default {
  ...createValidators({
    isArguments,
    isArrayBuffer,
    isArrayLike,
    isArrayLikeObject,
    isBoolean,
    isBuffer,
    isDate,
    isElement,
    isEmpty,
    isEqualWith,
    isError,
    isFinite,
    isFunction,
    isMap,
    isMatch,
    isMatchWith,
    isNaN,
    isNative,
    isNil,
    isNull,
    isObjectLike,
    isPlainObject,
    isRegExp,
    isSafeInteger,
    isSet,
    isSymbol,
    isTypedArray,
    isUndefined,
    isWeakMap,
    isWeakSet,
    isRegExpMatch: validatorsJs.matches,
    ...pick(validatorsJs, [
      'isAlphanumeric',
      'isAlpha',
      'isAscii',
      'isBase64',
      'isByteLength',
      'isCreditCard',
      'isCurrency',
      'isDataURI',
      'isDecimal',
      'isEmail',
      'isFQDN',
      'isFullWidth',
      'isHalfWidth',
      'isHash',
      'isHexColor',
      'isHexadecimal',
      'isIP',
      'isIPRange',
      'isISBN',
      'isISIN',
      'isISO31661Alpha2',
      'isISO31661Alpha3',
      'isISO8601',
      'isISRC',
      'isISSN',
      'isIdentityCard',
      'isJSON',
      'isJWT',
      'isLatLong',
      'isLowercase',
      'isMACAddress',
      'isMD5',
      'isMagnetURI',
      'isMimeType',
      'isMobilePhone',
      'isMultibyte',
      'isNumeric',
      'isPort',
      'isPostalCode',
      'isRFC3339',
      'isSurrogatePair',
      'isURL',
      'isUUID',
      'isUppercase',
      'isVariableWidth',
      'isWhitelisted',
      'isMongoId',
    ]),
  }),
  isAny,
  isArray,
  isArrayElement,
  isCloseTo,
  isDefault,
  isEvery,
  isFalsy,
  isInstanceOf,
  isInteger,
  isLength,
  isMax,
  isMin,
  isNegative,
  isNumber,
  isObject,
  isOneOf,
  isPositive,
  isPrecision,
  isProperty,
  isPropertyEqual,
  isRequired,
  isSchema,
  isString,
  isTruthy,
  isValid,
  isEqual,
  isJSONSchema,
  isNot,
  isTernary,
  isPropertyPath,
};
