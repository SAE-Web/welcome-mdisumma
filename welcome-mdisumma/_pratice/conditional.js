// conditional if
var condition = true;

if (condition) {
    console.log("the condition is true")
};

// conditional if else
var condition = false;

if (condition) {
    console.log("the of condition is true")
} else {
    console.log("the of condition is false")
};

// conditional logic
let a = 5;
let b = 4;
let match;
if (a == b) {
    match = true;
} else {
    match = false;
};

console.log ("the items match is " + match)

let c = 6;
let d = 6;

if (a == b && c == d) {
    console.log("both are equal")
} else if (a == b || c == d) {
    console.log("one of the two is true")
} else {
    console.log("they are all different")
};