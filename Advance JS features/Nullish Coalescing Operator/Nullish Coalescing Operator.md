# Nullish Coalescing Operator

This operator worked on the concept of `nullish` values.

-   `Nullish` values are values like null; such as null, undefined.
-   values like 0 (Zero) and ""(Empty string are not null values.)

```js
restaurant.numGuests = 4;
let guests = restaurant.numGuests || 10;
console.log(guests);

let guestsNew = restaurant.numGuests ?? 10;
console.log(guestsNew);
// Output: 4 for both cases.

restaurant.numGuests = 0;
guests = restaurant.numGuests || 10;
console.log(guests);

guestsNew = restaurant.numGuests ?? 10;
console.log(guestsNew);
// Output: 0 as Zero is not a null value rather an integer.
```
