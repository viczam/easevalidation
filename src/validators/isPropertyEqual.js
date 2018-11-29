import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import createValidator from '../createValidator';

export default createValidator('isPropertyEqual', (value, property, otherProperty) =>
  isEqual(get(value, property), get(value, otherProperty)),
);
