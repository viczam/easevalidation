import pick from 'lodash/pick';
import ValidatorStack from '../ValidatorStack';
import validators from '../validators';

export default () =>
  new ValidatorStack(
    {
      ...pick(validators, ['isMaxLength', 'isMinLength', 'isLength']),
      isValidElement: validators.isArray,
      isValid: validators.isValid,
      isEqual: validators.isEqual,
      isEqualWith: validators.isEqualWith,
      isEmpty: validators.isEmpty,
    },
    [validators.isArray],
  );
