import pick from 'lodash/pick';
import ValidatorStack from '../ValidatorStack';
import validators from '../validators';

export default (validatorsMap = {}) =>
  new ValidatorStack(
    'object',
    {
      ...pick(validators, [
        'isSchema',
        'isProperty',
        'isEqual',
        'isEqualWith',
        'isEmpty',
        'isPropertyEqual',
        'isOneOf',
      ]),
      isValid: arg =>
        typeof arg === 'function' ? validators.isValid(arg) : validators.isObject(arg),
      ...validatorsMap,
    },
    [validators.isObject()],
  );
