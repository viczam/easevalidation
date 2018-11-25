import isMongoId from 'validator/lib/isMongoId';

export default value => isMongoId(typeof value === 'object' ? value.toString() : value);
