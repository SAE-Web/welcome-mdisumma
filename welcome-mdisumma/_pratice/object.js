// basic object
var emptyObject = {};
console.log(emptyObject);

// objects data

var myData = {
    age : 42,
    state : true,
    label : null,
    name : 'marco',
    surname : 'di summa',
    course : 'javaScript',
    
};
console.log(myData);
console.log(myData.name);
console.log(myData["surname"]);
console.log(typeof myData.label);
console.log(typeof myData.age);
console.log(typeof myData.state);
console.log(typeof myData.name);

// make a copy of an object safetly
myData2 = JSON.parse(JSON.stringify(myData));
console.log(myData2);

