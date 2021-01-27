//defining the variables
let startingPoint = 1;
const till1 = -54;
const till2 = 56;

console.log (startingPoint);
console.log (till1-startingPoint);
console.log (till2-startingPoint);

if (till1-startingPoint<till2-startingPoint) {
    console.log ("go to till number 1");
} else {
    console.log ("go to till number 2");
}


//Math.abs returne the absolute value of a number
if (Math.abs(till1-startingPoint)==Math.abs(till2-startingPoint)) {
    console.log ("hihter tills are good");
} else {
    if (Math.abs(till1-startingPoint)<Math.abs(till2-startingPoint)) {
        console.log ("go to till number 1");
    } else {
        console.log ("go to till number 1");
    }
}