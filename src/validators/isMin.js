export default (value, minimum, exclusive = false) =>
  exclusive ? Number(value) > minimum : Number(value) >= minimum;
