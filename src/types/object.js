import ValidatorStack from '../ValidatorStack';
import validators from '../validators';

export default () =>
  new ValidatorStack(
    {
      isSchema: validators.isObject,
      isProperty: validators.isProperty,
      isEqual: validators.isEqual,
      isEqualWith: validators.isEqualWith,
      isEmpty: validators.isEmpty,
      isPropertyEqual: validators.isPropertyEqual,
      isValid: validators.isValid,
      isOneOf: validators.isOneOf,
    },
    [validators.isValidObject],
  );
