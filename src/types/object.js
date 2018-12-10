import pick from 'lodash/pick';
import ValidatorStack from '../ValidatorStack';
import validators from '../validators';

export default (...args) =>
  new ValidatorStack('object', [validators.isObject(...args)]).extend(
    pick(validators, [
      'isSchema',
      'isProperty',
      'isPropertyPath',
      'isEqual',
      'isEqualWith',
      'isEmpty',
      'isPropertyEqual',
      'isOneOf',
      'isValid',
      'isTernary',
    ]),
  );
