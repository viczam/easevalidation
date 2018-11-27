import pick from 'lodash/pick';
import ValidatorStack from '../ValidatorStack';
import validators from '../validators';

export default (validatorsMap = {}) =>
  new ValidatorStack(
    'boolean',
    {
      ...pick(validators, ['isEqual', 'isEqualWith', 'isValid', 'isTruthy', 'isFalsy']),
      ...validatorsMap,
    },
    [validators.isBoolean()],
  );
