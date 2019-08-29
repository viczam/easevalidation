/* eslint-disable import/no-cycle */
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
import matches from 'validator/lib/matches';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import isAlpha from 'validator/lib/isAlpha';
import isAscii from 'validator/lib/isAscii';
import isBase64 from 'validator/lib/isBase64';
import isByteLength from 'validator/lib/isByteLength';
import isCreditCard from 'validator/lib/isCreditCard';
import isCurrency from 'validator/lib/isCurrency';
import isDataURI from 'validator/lib/isDataURI';
import isDecimal from 'validator/lib/isDecimal';
import isEmail from 'validator/lib/isEmail';
import isFQDN from 'validator/lib/isFQDN';
import isFullWidth from 'validator/lib/isFullWidth';
import isHalfWidth from 'validator/lib/isHalfWidth';
import isHash from 'validator/lib/isHash';
import isHexColor from 'validator/lib/isHexColor';
import isHexadecimal from 'validator/lib/isHexadecimal';
import isIP from 'validator/lib/isIP';
import isIPRange from 'validator/lib/isIPRange';
import isISBN from 'validator/lib/isISBN';
import isISIN from 'validator/lib/isISIN';
import isISO31661Alpha2 from 'validator/lib/isISO31661Alpha2';
import isISO31661Alpha3 from 'validator/lib/isISO31661Alpha3';
import isISO8601 from 'validator/lib/isISO8601';
import isISRC from 'validator/lib/isISRC';
import isISSN from 'validator/lib/isISSN';
import isIdentityCard from 'validator/lib/isIdentityCard';
import isJSON from 'validator/lib/isJSON';
import isJWT from 'validator/lib/isJWT';
import isLatLong from 'validator/lib/isLatLong';
import isLowercase from 'validator/lib/isLowercase';
import isMACAddress from 'validator/lib/isMACAddress';
import isMD5 from 'validator/lib/isMD5';
import isMagnetURI from 'validator/lib/isMagnetURI';
import isMimeType from 'validator/lib/isMimeType';
import isMobilePhone from 'validator/lib/isMobilePhone';
import isMultibyte from 'validator/lib/isMultibyte';
import isNumeric from 'validator/lib/isNumeric';
import isPort from 'validator/lib/isPort';
import isPostalCode from 'validator/lib/isPostalCode';
import isRFC3339 from 'validator/lib/isRFC3339';
import isSurrogatePair from 'validator/lib/isSurrogatePair';
import isURL from 'validator/lib/isURL';
import isUUID from 'validator/lib/isUUID';
import isUppercase from 'validator/lib/isUppercase';
import isVariableWidth from 'validator/lib/isVariableWidth';
import isWhitelisted from 'validator/lib/isWhitelisted';
import isMongoId from 'validator/lib/isMongoId';
import isString from './isString';
import isNumber from './isNumber';
import isAny from './isAny';
import isEvery from './isEvery';
import isSchema from './isSchema';
import isArray from './isArray';
import isArrayElementAt from './isArrayElementAt';
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
    isRegExpMatch: matches,
    isAlphanumeric,
    isAlpha,
    isAscii,
    isBase64,
    isByteLength,
    isCreditCard,
    isCurrency,
    isDataURI,
    isDecimal,
    isEmail,
    isFQDN,
    isFullWidth,
    isHalfWidth,
    isHash,
    isHexColor,
    isHexadecimal,
    isIP,
    isIPRange,
    isISBN,
    isISIN,
    isISO31661Alpha2,
    isISO31661Alpha3,
    isISO8601,
    isISRC,
    isISSN,
    isIdentityCard,
    isJSON,
    isJWT,
    isLatLong,
    isLowercase,
    isMACAddress,
    isMD5,
    isMagnetURI,
    isMimeType,
    isMobilePhone,
    isMultibyte,
    isNumeric,
    isPort,
    isPostalCode,
    isRFC3339,
    isSurrogatePair,
    isURL,
    isUUID,
    isUppercase,
    isVariableWidth,
    isWhitelisted,
    isMongoId,
  }),
  isAny,
  isArray,
  isArrayElementAt,
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
