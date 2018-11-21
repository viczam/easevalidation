import isNil from 'lodash/isNil';

export default value => !isNil(value) && (typeof value === 'string' ? value.trim().length : true);
