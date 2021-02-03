let shoppingList = ["eggs","broccoli","milk","sugar"]
for (let index = 0; index < shoppingList.length; index++){
    console.log(shoppingList[index]);
}

console.log(shoppingList);
console.log("shift " + shoppingList.shift());
console.log(shoppingList);

console.log("unshift apple " + shoppingList.unshift("apple"));
console.log(shoppingList);

console.log("push banana " + shoppingList.push("banana"));
console.log(shoppingList);

console.log("pop " + shoppingList.pop());
console.log(shoppingList);

console.log("splice - " + shoppingList.splice(1, 1));
console.log(shoppingList);
console.log("splice + cherry" + shoppingList.splice(1,0, "cherry"));
console.log(shoppingList);
   
