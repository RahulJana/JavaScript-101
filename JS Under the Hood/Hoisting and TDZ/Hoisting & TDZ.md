# Hoisting and Temporat Dead Zone

**Hoisting:** This feature makes some types of variable accessible/usable in the code, before they are actually declared. Before execution, code is scanned fir variable declarations, and for each variable, a new property is created in the `variable environment object`.

```JavaScript
"use strict";

const name = "Rahul";

if(name === "Rahul"){
    //<<<------------ Start of TDZ for variable job
    // console.log(`${name} is a ${job}`);  // Error-msg: hoisting_and_tdz.js:6 Uncaught ReferenceError: Cannot access 'job' before initialization
    console.log(`${name}'s bike: ${bike}`); // OUTPUT: Rahul's bike: undefined
    const age = 23;
    console.log(age);
    // <<<----------- TDZ for variable job
    const job = "Student";
    var bike = "RE Classic"; 
    // console.log(undeclaredVariable);  // Error-msg: Uncaught ReferenceError: undeclaredVariable is not defined

}
```

## Working of `TDZ`

1. TDZ makes it easier to track, find and fix bugs.
2. Make sure `const` variable work, how they should suppose to work.

___

## Why `Hoisting` exists

1. Using functions before actual declaration. It comes handy while conducting mutual recursion.
2. 