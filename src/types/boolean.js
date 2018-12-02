import pick from 'lodash/pick';
import ValidatorStack from '../ValidatorStack';
import validators from '../validators';

export default (...args) =>
  new ValidatorStack('boolean', [validators.isBoolean(...args)]).extend(
    pick(validators, ['isEqual', 'isEqualWith', 'isValid', 'isTruthy', 'isFalsy']),
  );
