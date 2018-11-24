import ValidatorStack from '../ValidatorStack';
import validators from '../validators';

export default (validatorsMap = {}) =>
  new ValidatorStack(
    {
      isSchema: validators.isSchema,
      isProperty: validators.isProperty,
      isEqual: validators.isEqual,
      isEqualWith: validators.isEqualWith,
      isEmpty: validators.isEmpty,
      isPropertyEqual: validators.isPropertyEqual,
      isValid: validators.isValid,
      isOneOf: validators.isOneOf,
      ...validatorsMap,
    },
    [validators.isObject],
  );
