# easevalidation

### Install

```
npm install easevalidation
```

`easevalidation` is an easy to extend javascript validation library that supports multiple types of validators:
functional validation, schema based, chained validators etc.

It comes bundled with all lodash is\* validators (like isPlainObject, isFinite etc), all the [validator.js](https://github.com/chriso/validator.js) validators
and the date-related validators [date-fns](https://date-fns.org/) comes with.
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

const { isSchema, isEmail, isRequired, isString, isLength } = validators;

const schema = isSchema({
  email: [isEmail()],
  password: [isRequired(), isString(), isLength({ min: 5 })],
});

const isValid = test(schema)({
  email: 'me@gmail.com',
  password: '12345',
});
```

Or:

```js
import { test, validators } from 'easevalidation';

const { isPlainObject, isProperty, isEmail, isRequired, isString, isLength } = validators;

const schema = [
  isPlainObject(),
  isProperty('email', isEmail()),
  isProperty('password', isRequired(), isString(), isLength({ min: 5 })),
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

Validators can also update the value they receive for testing.

```js
import { createValidator, test } from 'easevalidation';
import { ObjectID as objectId } from 'mongodb';

const isObjectId = createValidator(
  'isObjectId',
  value => objectId.isValid(value),
  value => objectId(value),
);

const isValid = test(isObjectId())('5bf6cd3e766582a5bf892519');
```

As you can see, the signature of `createValidator` is:

```js
createValidator(String code, Function validate, [Function updateValue, Function validateConfig])
```

Keep in mind that `updateValue` will run **after** `validate` function tests the value and **only** if it returns true (`value` passes validation).

Only `code` and `validate` are required, the rest of arguments are optional.
`validateConfig` is a function that can be used to validate the configuration the `validate` function will receive.

Another way to update the value is by returning an object from `validate`:

```js
import { createValidator, test } from 'easevalidation';
import { ObjectID as objectId } from 'mongodb';

const isObjectId = createValidator('isObjectId', value => ({
  isValid: objectId.isValid(value),
  value: objectId(value),
}));

const isValid = test(isObjectId())('5bf6cd3e766582a5bf892519');
```

Sometimes you may want to get access to the final updated value, besides just testing it.

```js
import { createValidator, test, validators } from 'easevalidation';
import { ObjectID as objectId } from 'mongodb';

const { isSchema, isString, isNumber, isMin } = validators;

const isObjectId = createValidator('isObjectId', value => ({
  isValid: objectId.isValid(value),
  value: objectId(value),
}));

const validate = test(
  isSchema({
    name: isString(),
    age: [isNumber(), isMin(20)],
    id: isObjectId(),
  }),
);

const isValid = validate({
  name: 'John Doe',
  age: '22',
  id: '5bf6cd3e766582a5bf892519',
});

const { value } = validate;

// In this case `isValid` will be `true` and `value` will be:

{
  name: 'John Doe',
  age: 22, // number
  id: ObjectId('5bf6cd3e766582a5bf892519') // object
}
```

Instead of building a validation function like we did above, you can use `validate`:

```js
import { createValidator, validate, validators } from 'easevalidation';
import { ObjectID as objectId } from 'mongodb';

const { isSchema, isString, isNumber, isMin } = validators;

try {
  const value = validate(
    isSchema({
      name: isString(),
      age: [isNumber(), isMin(20)],
      id: isObjectId(),
    }),
  )({
    name: 'John Doe',
    age: '22',
    id: '5bf6cd3e766582a5bf892519',
  });
} catch (err) {
  // won't get here, because it passes validation
}
```
