const jsonStr = '{"greetings": "Hello"}';

const jsObject = JSON.parse(jsonStr);

console.log(jsObject);

jsObject.greetings = "Hi there.";
console.log(jsObject);

// Vice-versa
const data = {
    firstName: "Rahul",
    lastName: "Jana",
    age: 23
}

console.log(JSON.stringify(data));
