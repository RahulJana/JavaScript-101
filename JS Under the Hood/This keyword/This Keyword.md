# `This` Keyword

**What is `this`:**  
In JavaScript, the `this` keyword refers to an `object`. Which object depends on how `this` is being invoked (used or called). The this keyword refers to different objects depending on how it is used.

`this` keyword is created for every execution context(every function). `this` keyword is **NOT Static**. Its value is only assigned when the function is actually called.

1. In an `object` method, `this` refers to the `object`.
2. Alone, `this` refers to the `global-object`.
3. In a function, `this` refers to the `global-object`.
4. In a function, in `strict mode`, `this` is `undefined`.
5. In an `event`, `this` refers to the element that received the event.
6. Methods like `call()`, `apply()`, and `bind()` can refer `this` to any `object`.

-   Function is called like a method in strict mode:

```JS
"use strict";

const name = "Rahul-Global";
const year = 1999;
console.log(name);

const empRahul = {
    name: "Rahul-inside empRahul",
    year: 1999,

    calcAge: function () {
        return 2022 - this.year;
    },

    getName: function () {
        return this.name;
    },
};

console.log(empRahul.getName() + " -> " + empRahul.calcAge());
```

```Console
    Rahul-Global
    Rahul-inside empRahul -> 23
```

-   In normal function call `this` is `undefined` with out `strict mode`

```JS
// "use strict";
function getDetailsWithThis() {
    console.log(this.name + " -> " + this.year);
}

getDetailsWithThis();
```

```console
    undefined
```

-   With Strict mode

```JS
"use strict";
const name = "Rahul-Global";
const year = 1999;

// Simple function call

function getDetailsWithThis() {
    console.log(this.name + " -> " + this.year);
}

function getDetails() {
    console.log(name + " -> " + year);
}

getDetailsWithThis();
```

```console
    this_keyword.js:26 Uncaught TypeError: Cannot read properties of undefined (reading 'name') at getDetailsWithThis (this_keyword.js:26:22) at this_keyword.js:34:1
```

-   But a function call with-out `this` works just fine:

```JS
"use strict";
const name = "Rahul-Global";
const year = 1999;

function getDetails() {
    console.log(name + " -> " + year);
}
```

```console
    Rahul-Global -> 1999
```

---

## Some other concepts in `this` keyword

```JS
"use strict";
console.log(this);  // OUTPUT: this keyword in the global scope is the window object.
```

```JS
"use strict";  // Using Strict mode
const getYOB  = function(birthYear){ // It is a regular function call
    console.log(birthYear);
    console.log(this);  // OUTPUT: undefined [in Strict mode]
}

getYOB(birthYear);
```

```console
>>> undefined
```

---

```JS
// "use strict";
const getYOB  = function(birthYear){ // It is a regular function call
    console.log(birthYear);
    console.log(this);  // OUTPUT: In sloppy mode it is window object, just like global scope.
}
```

```console
>>> window object
```

-   **Arrow functions:**
    Arrow function do not get their own `this` keyword. So when we use `this` keyword in arrow function, it basically the `this` keyword(Object) of parent function. In technical words it is called the `lexical this keyword`, as it gets picked up from outer lexical scope of the `ARROW FUNCTION`.

-   `this` keyword does not point to the function itself and also not its variable environment.

```JS
"use strict"
const getYOBArrow = birthYear => {
    console.log(birthYear);
    console.log(this);  // OUTPUT: window object[in Strict mode as well as Sloppy mode]
}

getYOBArrow(birthYear);
```

```console
1999
window object
```

***The above phenomena is happening because `arrow(=>) functions()` does not gets it own this keyword.***
