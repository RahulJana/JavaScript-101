// Primitive types.
let age = 23;
let oldAge = age;
age = 24;
console.log(age);
console.log(oldAge);

// Reference types.
const johnDoe = {
    name: "John",
    age: 30,
};

console.log("before: ", johnDoe);

const janeDoe = johnDoe;
janeDoe.name = "jane";
janeDoe.age = 27;

console.log(janeDoe);
console.log("after:", johnDoe); // The age is also changed.

// Following characters are from famous game: Red Dead Redemption 2
const maryLiton = {
    firstName: "Mary",
    lastName: "Liton",
    age: 27,
};

console.log(`Before Marriage: ${maryLiton.firstName} ${maryLiton.lastName}`);

const maryAfterMarriage = maryLiton; // Sallow Copy
maryAfterMarriage.lastName = "Morgan";

console.log(`After Marriage: ${maryLiton.firstName} ${maryLiton.lastName}`);

// Copying objects.
const sadieAdler = {
    firstName: "Sadie",
    lastName: "Adler",
    age: 25,
    maritalStatus: "Widow",
    hobby: ["Hunting", "Camping", "Fishing"],
};

const sadieAdler_copy = Object.assign({}, sadieAdler); // Deep Copy
sadieAdler_copy.maritalStatus = "Married";
sadieAdler_copy.lastName = "Morgan";
sadieAdler_copy.hobby.push("Cooking", "Chopping"); // Since this is a nested object containing values Deep copy will not able to stop the changing of the values in sadieAdler object.

console.log("Before: ", sadieAdler);
console.log("After: ", sadieAdler_copy);
