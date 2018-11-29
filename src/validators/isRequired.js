import isNil from 'lodash/isNil';
import createValidator from '../createValidator';

export default createValidator('isRequired', value =>
  typeof value === 'string' ? !!value.trim().length : !isNil(value),
);
