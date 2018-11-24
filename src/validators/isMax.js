export default (value, maximum, exclusive = false) =>
  exclusive ? Number(value) < maximum : Number(value) <= maximum;
