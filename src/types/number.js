import pick from 'lodash/pick';
import ValidatorStack from '../ValidatorStack';
import validators from '../validators';

export default (validatorsMap = {}) =>
  new ValidatorStack(
    'number',
    {
      ...pick(validators, [
        'isFinite',
        'isInteger',
        'isSafeInteger',
        'isMax',
        'isMin',
        'isCloseTo',
        'isEqual',
        'isEqualWith',
        'isValid',
        'isOneOf',
        'isInteger',
        'isPositive',
        'isNegative',
      ]),
      ...validatorsMap,
    },
    [validators.isNumber()],
  );
