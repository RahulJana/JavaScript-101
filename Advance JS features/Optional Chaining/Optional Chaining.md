# Optional Chaining

In JS there are could be many nested property, which can be hard to check if that property exists. So we use optional chaining for checking and evaluating the property.

```JS
// Single property
if (restaurant.openingHours.mon)
    console.log("mon Open:" + restaurant.openingHours.mon.open);

if (restaurant.openingHours.fri)
    console.log("fri Open:" + restaurant.openingHours.fri.open);

// Nested Property
if (restaurant.openingHours && restaurant.openingHours.mon)
    console.log("mon Open:" + restaurant.openingHours.mon.open);

if (restaurant.openingHours && restaurant.openingHours.fri)
    console.log("fri Open:" + restaurant.openingHours.fri.open);

// Optional Chaining
console.log("mon Open:" + restaurant.openingHours?.mon);

console.log("fri Open:" + restaurant.openingHours?.fri);
// Output: fri Open:[object Object]
console.log("fri Open:" + restaurant.openingHours.fri?.open);
// Output: fri Open:11

console.log("Sat Open:" + restaurant.openingHours.sat?.open);
// Output: Sat Open:0 ; Zero is not considered as a null/ false, As the value still exists.
```
