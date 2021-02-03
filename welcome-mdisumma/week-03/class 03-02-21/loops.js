//for loop
for (let index = 0; index < shippinglist.length; index++){
    console.log("for loops");
    console.log(shippinglist[index]);
}

//.forEach loop
shippinglist.forEach(shippinglist => {
    console.log(".forEach loop");
    console.log(`current item ${shippinglist}`),
 console.log(shippinglist);
})

//for loop
for (const items of shippinglist) {
    console.log(`the current item is ${shippinglist}`);
}

let myCheckField = document.getElementsByClassName("listCheck")[0];
for (let i = 0; i < shippinglist.length; i++) { 
myCheckField.innerHTML = `<li> ${shippinglist} </li> `
}
        