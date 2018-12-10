import pick from 'lodash/pick';
import ValidatorStack from '../ValidatorStack';
import validators from '../validators';

export default (...args) =>
  new ValidatorStack('array', [validators.isArray(...args)]).extend(
    pick(validators, [
      'isLength',
      'isLength',
      'isValid',
      'isEqual',
      'isEqualWith',
      'isEmpty',
      'isTernary',
    ]),
  );
