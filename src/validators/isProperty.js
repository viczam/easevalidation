import validate from '../validate';
import createValidator from '../createValidator';

export default createValidator('isProperty', (value, property, ...validators) => {
  const val = validate(...validators)(value[property]);

  if (typeof val !== 'undefined') {
    Object.assign(value, {
      [property]: val,
    });
  }

  return true;
});
