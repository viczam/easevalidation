import pick from 'lodash/pick';
import ValidatorStack from '../ValidatorStack';
import validators from '../validators';

export default (validatorsMap = {}) =>
  new ValidatorStack(
    {
      ...pick(validators, [
        'isSchema',
        'isProperty',
        'isEqual',
        'isEqualWith',
        'isEmpty',
        'isPropertyEqual',
        'isValid',
        'isOneOf',
      ]),
      ...validatorsMap,
    },
    [validators.isObject],
  );
