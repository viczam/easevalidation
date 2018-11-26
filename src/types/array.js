import pick from 'lodash/pick';
import ValidatorStack from '../ValidatorStack';
import validators from '../validators';

export default (validatorsMap = {}) =>
  new ValidatorStack(
    'array',
    {
      ...pick(validators, ['isLength', 'isLength', 'isValid', 'isEqual', 'isEqualWith', 'isEmpty']),
      isValidElement: validators.isArray,
      ...validatorsMap,
    },
    [validators.isArray()],
  );
