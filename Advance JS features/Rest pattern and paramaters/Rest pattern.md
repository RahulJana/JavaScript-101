# Rest operator

-   It is a method for packing iterables and object.
-   (...) right side means spread operator.
-   (...) left side means rest operator.

```js
arr = [1, 2, [3, 4]]; // Nested array
console.log(arr);

arr = [1, 2, ...[3, 4]]; // [3, 4] is being destructured inside arr
console.log(arr); // Output: [1, 2, 3, 4]

let [a, b, ...restOfArr] = [10, 20, 30, 40]; // 30 and 40 getting repackaged.
console.log(a);
console.log(b);
console.log(restOfArr); // Output: [30, 40]
```
