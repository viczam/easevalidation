import { createValidator } from '..';

export default createValidator('isMin', (value, minimum, exclusive = false) =>
  exclusive ? Number(value) > minimum : Number(value) >= minimum,
);
