# easevalidation

`easevalidation` is an easy to extend javascript validation library that supports multiple types of validators:
functional validation, schema based, chained validators etc.

It comes bundled with all lodash is\* validators (like isPlainObject, isFinite etc) all the [validator.js](https://github.com/chriso/validator.js) validators.
On top of that, it features some commonly used validators you can find [here](https://github.com/viczam/easevalidation/tree/master/src/validators).

You test the input data using the `test` function:

```js
import { test, validators } from 'easevalidation';

const { isNumber, isMin, isMax } = validators;

const isValid = test(isNumber(), isMin(10), isMax(15))(13); // true
```

Or you can use a chained validator:

```js
import { test, number } from 'easevalidation';

const isValid1 = test(
  number()
    .isMin(10)
    .isMax(15),
)(13);

// or

const isValid2 = number()
  .isMin(10)
  .isMax(15)
  .test(13);

// isValid1 === isValid2 === true
```

You can also validate an object by a schema:

```js
import { test, validators } from 'easevalidation';

const { isSchema, isEmail, isRequired, isString, isMinLength } = validators;

const schema = isSchema({
  email: [isEmail()],
  password: [isRequired(), isString(), isMinLength(5)],
});

const isValid = test(schema)({
  email: 'me@gmail.com',
  password: '12345',
});
```

Or:

```js
import { test, validators } from 'easevalidation';

const { isPlainObject, isProperty, isEmail, isRequired, isString, isMinLength } = validators;

const schema = [
  isPlainObject(),
  isProperty('email', isEmail()),
  isProperty('password', isRequired(), isString(), isMinLength(5)),
];

const isValid = test(schema)({
  email: 'me@gmail.com',
  password: '12345',
});
```

While `easevalidation` comes prebuilt with many validators, creating your own validators is an easy job.

```js
import { createValidator, test } from 'easevalidation';

const isBetween = createValidator('isBetween', (value, min, max) => min <= value && value <= max);

const isValid = test(isBetween(10, 15))(13); // true
```
