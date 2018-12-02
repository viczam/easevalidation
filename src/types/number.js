import pick from 'lodash/pick';
import ValidatorStack from '../ValidatorStack';
import validators from '../validators';

export default (...args) =>
  new ValidatorStack('number', [validators.isNumber(...args)]).extend(
    pick(validators, [
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
      'isPrecision',
    ]),
  );
