import pick from 'lodash/pick';
import isArguments from 'lodash/isArguments';
import isValidObject from 'lodash/isObject';
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
import dateIsAfter from 'date-fns/is_after';
import dateIsBefore from 'date-fns/is_before';
import dateIsEqual from 'date-fns/is_equal';
import dateIsFirstDayOfMonth from 'date-fns/is_first_day_of_month';
import dateIsFriday from 'date-fns/is_friday';
import dateIsLastDayOfMonth from 'date-fns/is_last_day_of_month';
import dateIsLeapYear from 'date-fns/is_leap_year';
import dateIsMonday from 'date-fns/is_monday';
import dateIsSameDay from 'date-fns/is_same_day';
import dateIsSameHour from 'date-fns/is_same_hour';
import dateIsSameISOWeek from 'date-fns/is_same_iso_week';
import dateIsSameISOYear from 'date-fns/is_same_iso_year';
import dateIsSameMinute from 'date-fns/is_same_minute';
import dateIsSameMonth from 'date-fns/is_same_month';
import dateIsSameQuarter from 'date-fns/is_same_quarter';
import dateIsSameSecond from 'date-fns/is_same_second';
import dateIsSameWeek from 'date-fns/is_same_week';
import dateIsSameYear from 'date-fns/is_same_year';
import dateIsSaturday from 'date-fns/is_saturday';
import dateIsSunday from 'date-fns/is_sunday';
import dateIsThursday from 'date-fns/is_thursday';
import dateIsTuesday from 'date-fns/is_tuesday';
import dateIsValid from 'date-fns/is_valid';
import dateIsWednesday from 'date-fns/is_wednesday';
import dateIsWeekend from 'date-fns/is_weekend';
import dateIsWithinRange from 'date-fns/is_within_range';
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
import isCloseTo from './isCloseTo';
import createValidators from '../createValidators';
import createChainedValidator from '../createChainedValidator';

const validators = {
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
    isCloseTo,
    isValidObject,
    ...validatorsJs,
  }),
};

validators.string = createChainedValidator(
  {
    ...pick(validators, [
      'isLength',
      'isMinLength',
      'isMaxLength',
      'isRegexMatch',
      'isAlpha',
      'isAlphanumeric',
      'isAscii',
      'isBase64',
      'isCreditCard',
      'isCurrency',
      'isDataURI',
      'isMagnetURI',
      'isDecimal',
      'isEmail',
      'isFQDN',
      'isFullWidth',
      'isHalfWidth',
      'isHash',
      'isHexColor',
      'isHexadecimal',
      'isIdentityCard',
      'isIP',
      'isIPRange',
      'isISBN',
      'isJSON',
      'isJWT',
      'isLatLong',
      'isLowercase',
      'isMD5',
      'isMobilePhone',
      'isMongoId',
      'isMultibyte',
      'isNumeric',
      'isPort',
      'isPostalCode',
      'isURL',
      'isUUID',
      'isUppercase',
      'isVariableWidth',
      'isWhitelisted',
    ]),
    isMatch: validators.matches,
    isEqual: validators.isEqual,
    isEqualWith: validators.isEqualWith,
  },
  [validators.isString],
);

validators.number = createChainedValidator(
  {
    ...pick(validators, [
      'isFinite',
      'isInteger',
      'isSafeInteger',
      'isExclusiveMaximum',
      'isExclusiveMinimum',
      'isMaximum',
      'isMinimum',
      'isCloseTo',
    ]),
    isEqual: validators.isEqual,
    isEqualWith: validators.isEqualWith,
  },
  [validators.isNumber],
);

validators.date = createChainedValidator(
  {
    ...createValidators({
      isAfter: dateIsAfter,
      isBefore: dateIsBefore,
      isEqual: dateIsEqual,
      isFirstDayOfMonth: dateIsFirstDayOfMonth,
      isFriday: dateIsFriday,
      isLastDayOfMonth: dateIsLastDayOfMonth,
      isLeapYear: dateIsLeapYear,
      isMonday: dateIsMonday,
      isSameDay: dateIsSameDay,
      isSameHour: dateIsSameHour,
      isSameISOWeek: dateIsSameISOWeek,
      isSameISOYear: dateIsSameISOYear,
      isSameMinute: dateIsSameMinute,
      isSameMonth: dateIsSameMonth,
      isSameQuarter: dateIsSameQuarter,
      isSameSecond: dateIsSameSecond,
      isSameWeek: dateIsSameWeek,
      isSameYear: dateIsSameYear,
      isSaturday: dateIsSaturday,
      isSunday: dateIsSunday,
      isThursday: dateIsThursday,
      isTuesday: dateIsTuesday,
      isWednesday: dateIsWednesday,
      isWeekend: dateIsWeekend,
      isWithinRange: dateIsWithinRange,
      isValid: dateIsValid,
    }),
    isEqual: validators.isEqual,
    isEqualWith: validators.isEqualWith,
  },
  [validators.isDate],
);

validators.array = createChainedValidator(
  {
    ...pick(validators, ['isMaxLength', 'isMinLength', 'isLength']),
    isValid: validators.isArray,
    isEqual: validators.isEqual,
    isEqualWith: validators.isEqualWith,
  },
  [validators.isArray],
);

validators.object = createChainedValidator(
  {
    isSchema: validators.isObject,
    isEqual: validators.isEqual,
    isEqualWith: validators.isEqualWith,
  },
  [validators.isValidObject],
);

export default validators;
