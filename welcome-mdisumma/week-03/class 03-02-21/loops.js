let shippingList = [" eggs "," broccoli "," milk "," sugar "]


// //for loop
// for (let index = 0; index < shippingList.length; index++){
//     console.log("for loops");
//     console.log(shippingList[index]);
// }

//.forEach loop
shippingList.forEach(shippingList => {
    console.log(".forEach loop");
    console.log(`current item ${shippingList}`),
 console.log(shippingList);
})

// //for loop
// for (const items of shippingList) {
//     console.log(`the current item is ${shippingList}`);
// }

let myCheckField = document.getElementsByClassName("listCheck")[0];
for (let i = 0; i < shippingList.length; i++ ) { 

console.log(myCheckField.innerHTML = `<li> ${shippingList[i]} </li> `)

myCheckField.innerHTML = `<li> ${shippingList} </li> `

}
        