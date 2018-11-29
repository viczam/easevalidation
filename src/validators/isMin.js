import createValidator from '../createValidator';

export default createValidator('isMin', (value, minimum, exclusive = false) =>
  exclusive ? Number(value) > minimum : Number(value) >= minimum,
);
