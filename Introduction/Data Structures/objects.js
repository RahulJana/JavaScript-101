/*
signal property_key = property_value;

const storeManager.firstName = "Rahul";

*/


const storeManager = {};
storeManager.firstName = "Rahul";
storeManager.lastName = "Jana";
storeManager.age = "23";
storeManager.job = "Manager";
console.log(storeManager)


// Object literal syntax
let emp1_details = {
    firstName: "abc",
    lastName: "DEF",
    age: 123,
    colleagues: ["q", "w", "e", "r"]
}
emp1_details.salary = 100;
console.log(emp1_details)


const emp2_details = {
    firstName: "abc",
    lastName: "DEF",
    age: 123,
    colleagues: ["q", "w", "e", "r"]
}
emp2_details.salary = 100;
console.log(emp2_details)

// Retrieving Data
console.log(storeManager.firstName);
console.log(storeManager["lastName"]);


// We can put any operations in the [] bracket expression
let nameKey = "Name";
console.log(emp1_details["first" + nameKey]);
console.log(emp1_details["last" + nameKey]);

// Input block
// const interestedIn = prompt("Query: ");
// console.log(storeManager.interestedIn); // (.) Dot notation will not work in this scenario.

console.log("--------------------------------");
const person = {
    name: ["Rahul", "Jana"],
    age: 23,
    bio: function(){
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`)
    }
}

person.bio();
console.log("--------------------------------");
// nested objected
const student = {
    id: 1,
    name: {
        first: "Rahul",
        last: "Jana"
    },
    age: 23,
    bio: function(){
        console.log(`[${this.id}] ${this.name.first} ${this.name.last} is ${this.age}`);
    }
}

student.bio();
