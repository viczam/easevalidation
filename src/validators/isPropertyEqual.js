import get from 'lodash/get';

export default (value, property, otherProperty) =>
  get(value, property) === get(value, otherProperty);
