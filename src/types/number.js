import pick from 'lodash/pick';
import ValidatorStack from '../ValidatorStack';
import validators from '../validators';

export default (validatorsMap = {}) =>
  new ValidatorStack(
    {
      ...pick(validators, [
        'isFinite',
        'isInteger',
        'isSafeInteger',
        'isMax',
        'isMin',
        'isCloseTo',
      ]),
      isEqual: validators.isEqual,
      isEqualWith: validators.isEqualWith,
      isValid: validators.isValid,
      isOneOf: validators.isOneOf,
      ...validatorsMap,
    },
    [validators.isNumber],
  );