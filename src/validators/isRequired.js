import isNil from 'lodash/isNil';

export default value => (typeof value === 'string' ? !!value.trim().length : !isNil(value));
