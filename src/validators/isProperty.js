import every from './every';

export default (value, property, ...validators) =>
  typeof value[property] !== 'undefined' && every(value[property], ...validators);
