# JavaScript Execution

**Strict mode:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#:~:text=JavaScript's%20strict%20mode%20is%20a,different%20semantics%20from%20normal%20code.  
-> Strict mode changes previously accepted "bad syntax" into real errors. As an example, in normal JavaScript, mistyping a variable name creates a 
new global variable. In strict mode, this will throw an error, making it 
impossible to accidentally create a global variable.

In normal JavaScript, a developer will not receive any error feedback assigning
values to non-writable properties.

In strict mode, any assignment to a non-writable property, a getter-only 
property, a non-existing property, a non-existing variable, or a non-existing 
object, will throw an error.

Strict mode makes it easier to write "secure" JavaScript.JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode". Strict mode isn't just a subset: it intentionally has different semantics from normal code.

```JS
"use strict";  // Using Strict-mode.

function calcAge(birthYear) {
    const age = 2022 - birthYear;
    console.log(firstName);

    function printAge() {
        console.log(`${firstName} is ${age} years old.`);
        // First Name and age not present in the function scope, so it will do a variable look up.
    }

    if (birthYear >= 1981 && birthYear <= 1996) {
        var millennial = true;
        const ageGroup = "Millennial";
        console.log(`${firstName}, ${age}, ${ageGroup}`);
    } else if (birthYear >= 1997 && birthYear <= 2012) {
        var genZ = true;
        const ageGroup = "Gen Z";
        console.log(`${firstName}, ${age}, ${ageGroup}`);

        function add(a, b){
            return a + b
        }
    }

    console.log(add(10, 20));
    printAge();
}

const firstName = "Rahul";
calcAge(1999);

```

```console
Uncaught ReferenceError: add is not defined
```

As we are using strict mode, we are not using sloppy mode. Thus facing the issues.

If we don't use strict mode we won't get the error:
