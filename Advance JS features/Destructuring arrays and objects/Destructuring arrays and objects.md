# Destructuring arrays and object

-   We can use space as space-holder while destructuring the arrays.

```JS
const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]
    }

let [item_1, , item_3] = restaurant.categories;  // Used space as a space-holder.
console.log(item_1, item_3);
```

-   Error faced:

```JS
{ menu = [], starterMenu: starters = [] } = restaurant;
/* This causes an error :
*  Declaration or statement expected. This '=' follows a block of statements, so if you intended to write a destructuring assignment, you might need to wrap the the whole assignment in parentheses.ts(2809)
*/
```

-   Because when we start a line with curly braces `{}` ; JS expects it will be a code block; Since it is not a code block, we had to wrap everything(The destructuring assignment) inside parenthesis `()` .

**solution:**

```JS
({ menu = [], starterMenu: starters = [] } = restaurant);
```
