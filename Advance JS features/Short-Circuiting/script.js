"use strict";

const restaurant = {
    restaurantName: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({
        time = "18:00",
        address = "location",
        mainIndex = 1,
        starterIndex = 2,
    }) {
        console.log(
            `Order Received!! at ${time} from ${address}. Starter: ${this.starterMenu[starterIndex]}; Main Menu: ${this.mainMenu[mainIndex]}`
        );
    },

    orderPasta: function (ingr1, ingr2, ingr3) {
        console.log(
            `We received your order: with ${ingr1}, ${ingr2}, ${ingr3}.`
        );
    },
};

console.log(
    "--------------------- OR Operator Short circuiting------------------"
);
console.log(2 || "Rahul");
console.log("" || "Rahul");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Hello" || 23 || null); // Output will be "Hello"; as it is the 1st truthly value.

const guestList1 = restaurant.numGuests ? restaurant.numGuests : 7;
console.log(guestList1); // As restaurant.numGuests is undefined. we are setting the value of numGuests as 7.

// restaurant.numGuests = 12;
// const guestList2 = restaurant.numGuests ? restaurant.numGuests : 7; // now it is not undefined.
// console.log(guestList2);

const guestList3 = restaurant.numGuests || 10;
console.log(guestList3);

console.log(
    "--------------------- AND Operator Short circuiting---------------"
);
console.log(2 && "Rahul");
console.log("" && "Rahul");
console.log(true && 0);
console.log(undefined && null);
console.log("Hello" && 23 && null && undefined && 0 && ""); // Output will be null; as it is the 1st truthly value.

if (restaurant.orderPasta) {
    restaurant.orderPasta("mushroom", "olive", "oregano");
}

restaurant.orderPasta && restaurant.orderPasta("mushroom", "olive", "oregano");
