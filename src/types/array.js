import pick from 'lodash/pick';
import ValidatorStack from '../ValidatorStack';
import validators from '../validators';

export default (validatorsMap = {}) =>
  new ValidatorStack(
    {
      ...pick(validators, [
        'isMaxLength',
        'isMinLength',
        'isLength',
        'isValid',
        'isEqual',
        'isEqualWith',
        'isEmpty',
      ]),
      isValidElement: validators.isArray,
      ...validatorsMap,
    },
    [validators.isArray],
  );
