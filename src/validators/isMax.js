import { createValidator } from '..';

export default createValidator('isMax', (value, maximum, exclusive = false) =>
  exclusive ? Number(value) < maximum : Number(value) <= maximum,
);
