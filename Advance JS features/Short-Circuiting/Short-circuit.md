# Short circuiting

-   [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy): In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN.

**All Truthy values:**

    ```JS
    if (true) console.log(true); // true

    // Empty arrays and objects
    if ({}) console.log({}); // {}
    if ([]) console.log([]); // []

    if (42) console.log(42); // 42

    // This is String not a boolean mind!!
    if ("0") console.log("0"); //"0"
    if ("false") console.log("false"); // Output: "false"

    // Date
    if (new Date()) console.log(new Date());

    // Negative values
    if (-42) console.log(-42);
    if (12n) console.log(12n); // BigInt
    if (3.14) console.log(3.14);
    if (-3.14) console.log(-3.14);

    // Infinity
    if (Infinity) console.log(Infinity);
    if (-Infinity) console.log(-Infinity);
    ```

-   [Falsey](https://developer.mozilla.org/en-US/docs/Glossary/Falsy): A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

    ```JS
    if (false) {
    // Not reachable
    }

    if (null) {
    // Not reachable
    }

    if (undefined) {
    // Not reachable
    }

    if (0) {
    // Not reachable
    }

    if (-0) {
    // Not reachable
    }

    if (0n) {
    // Not reachable
    }

    if (NaN) {
    // Not reachable
    }

    if ("") {
    // Not reachable
    }

    ```

1. In case of logical OR(||): If 1st operand is truthy value, thenOR(||) the 2nd operand wont even consider.

    ```JS
    console.log(2 || "Rahul");
    // Output: 2

    ```

2. In case of logical(&&): 1st operand is truthy value then the 2nd operand wont even consider.

console.log(2 && "Rahul");
