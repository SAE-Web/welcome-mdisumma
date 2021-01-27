// Arrays preserve order and start to count from 0
var myArray = [];
console.log(myArray);

var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

console.log(weekDays);
console.log(weekDays[2]);

//manipulate array
var arrayOfThings = [ 0, 1, 2, 'string1', 'string2', true, false,];

console.log(arrayOfThings);
console.log(arrayOfThings.length);

arrayOfThings[3] = 'a different string';
arrayOfThings[3] = null;
arrayOfThings[arrayOfThings.length] = 'newString';
arrayOfThings.push('pop will remove it');
arrayOfThings.pop();
console.log(arrayOfThings);