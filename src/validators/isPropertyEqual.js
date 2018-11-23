import get from 'lodash/get';
import isEqual from 'lodash/isEqual';

export default (value, property, otherProperty) =>
  isEqual(get(value, property), get(value, otherProperty));
