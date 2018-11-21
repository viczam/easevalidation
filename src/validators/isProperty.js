import createValidator from '../createValidator';
import every from './every';

const everyValidator = createValidator('every', every);

export default (value, property, ...validators) =>
  typeof value[property] !== 'undefined' && everyValidator(...validators)(value[property]);
