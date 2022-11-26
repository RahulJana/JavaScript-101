// 5 Falsy value: 0, "", undefined, null, NaN

console.log(Boolean(0));  // false

console.log(Boolean(undefined));  // false

console.log(Boolean("Rahul"));  // true

console.log(Boolean({}));  // true

console.log(Boolean(null));  // false

console.log(Boolean(NaN));  // false

console.log(Boolean(""));  // false

let height = 0;

if(height){
    console.log("Height is defined.");
}else {
    console.log("height is not defined.");
}
/*
Output will be : height is not defined. As According to truthly and falsely values.
0 is considered as a falsely value.
*/