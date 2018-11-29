// https://stackoverflow.com/questions/9553354/how-do-i-get-the-decimal-places-of-a-floating-point-number-in-javascript/27865285#27865285
import createValidator from '../createValidator';

const getPrecision = a => {
  if (!Number.isFinite(a)) return 0;

  let e = 1;
  let p = 0;

  while (Math.round(a * e) / e !== a) {
    e *= 10;
    p += 1;
  }

  return p;
};

export default createValidator('isPrecision', (value, nr) => getPrecision(value) === nr);
