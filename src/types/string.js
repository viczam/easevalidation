import pick from 'lodash/pick';
import ValidatorStack from '../ValidatorStack';
import validators from '../validators';

export default (validatorsMap = {}) =>
  new ValidatorStack(
    {
      ...pick(validators, [
        'isLength',
        'isMinLength',
        'isMaxLength',
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
      isRequired: validators.isRequired,
      isValid: validators.isValid,
      isOneOf: validators.isOneOf,
      isValidNumber: validators.isValidNumber,
      ...validatorsMap,
    },
    [validators.isString],
  );
