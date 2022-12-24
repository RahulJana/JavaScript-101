# Data-Structures

## Variable declarations:-

- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter.
- Names can also begin with `$` and `_` (but we will not use it in this tutorial).
- Names are case sensitive (y and Y are different variables).
- Reserved words (like JavaScript keywords) cannot be used as names.
- JavaScript identifiers are case-sensitive.

## Arrays

- Adding elements with high indexes can create undefined "holes" in an array:

```Javascript
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adding/Pushing element.
fruits[fruits.length] = "Pineapple";  // Adds "Pineapple" to fruits
console.log(fruits);

// Adding elements with high indexes can create undefined "holes" in an array:
fruits[10] = "Mango";
console.log(fruits);
```

Output:

```console
[
  'Banana',
  'Orange',
  'Apple',
  'Lemon',
  'Pineapple',
  <5 empty items>,
  'Mango'
]
```

## Objects

- `const` does not imply that the object properties should not be altered. It does imply that you should not try to change the reference. If you plan to reassign references to the object, then you use `let`.

- **Arrays are objects:** In JavaScript, arrays are objects. That means that arrays also have some built-in properties and methods. One of the most commonly used built-in methods on arrays are the `push()` and the `pop()` methods.

## Strings

- Here's a list of all the methods covered in this cheat sheet:
  - charAt()
  - concat()
  - indexOf()
  - lastIndexOf()
  - split()
  - toUpperCase()
  - toLowerCase()

