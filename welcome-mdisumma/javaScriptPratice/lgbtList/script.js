import LgbtObjectlist from "./LgbtObjectlist.js";

//object from lgbtObejeclist (blueprint) 
const lgbtAlanTuring = new LgbtObjectlist(
    "Alan",
    "Turing",
    "June 23, 1912 ",
    "Inventor"
);

const lgbtLangstonHughes = new LgbtObjectlist(
    "Langston ",
    "Hughes",
    "Feb, 1 1902",
    "American writer"
);

const lgbtJamesBaldwin = new LgbtObjectlist(
    "James",
    "Baldwin",
    "Aug 2, 1924",
    "Public Intellectual"
);

const lgbtOscarWilde = new LgbtObjectlist(
    "Oscar ",
    "Wilde",
    "16 October 1854",
    "Poet and playwright"
);


// const lgbtnameList = {
//     lgbtAlanTuring,
//     lgbtLangstonHughes,
//     lgbtJamesBaldwin,
//     lgbtOscarWilde
// }

console.log(lgbtAlanTuring);
console.log(lgbtLangstonHughes);
console.log(lgbtJamesBaldwin);
console.log(lgbtOscarWilde);
// console.log(lgbtnameList);


//setting inner.html litteral
const lgbtAlanTuringContent = `
<ul>
<li>${lgbtAlanTuring.firstName}</li>
<li>${lgbtAlanTuring.lastName}</li>
<li>${lgbtAlanTuring.DOB}</li>
<li>${lgbtAlanTuring.achievement}</li>
</ul>
`;

const lgbtLangstonHughesContent = `
<ul>
<li>${lgbtLangstonHughes.firstName}</li>
<li>${lgbtLangstonHughes.lastName}</li>
<li>${lgbtLangstonHughes.DOB}</li>
<li>${lgbtLangstonHughes.achievement}</li>
</ul>
`;

const lgbtJamesBaldwinContent = `
<ul>
<li>${lgbtJamesBaldwin.firstName}</li>
<li>${lgbtJamesBaldwin.lastName}</li>
<li>${lgbtJamesBaldwin.DOB}</li>
<li>${lgbtJamesBaldwin.achievement}</li>
</ul>
`;

const lgbtOscarWildeContent = `
<ul>
<li>${lgbtOscarWilde.firstName}</li>
<li>${lgbtOscarWilde.lastName}</li>
<li>${lgbtOscarWilde.DOB}</li>
<li>${lgbtOscarWilde.achievement}</li>
</ul>
`;


//set id element field
const lgbtAlanTuringField = document.getElementById("lgbtAlanTuringContent");
const lgbtLangstonHughesField = document.getElementById("lgbtLangstonHughesContent");
const lgbtJamesBaldwinField = document.getElementById("lgbtJamesBaldwinContent");
const lgbtOscarWildeField = document.getElementById("lgbtOscarWildeContent");

lgbtAlanTuringField.innerHTML = lgbtAlanTuringContent;
lgbtLangstonHughesField.innerHTML = lgbtLangstonHughesContent;
lgbtJamesBaldwinField.innerHTML = lgbtJamesBaldwinContent;
lgbtOscarWildeField.innerHTML = lgbtOscarWildeContent;



//.forEach(item => item.style.propertie = "");
document.querySelectorAll("ul").forEach(item => item.style.border = "1px solid red");
document.querySelectorAll("ul").forEach(item => item.style.backgroundColor = "blue");
document.querySelectorAll("li:nth-child(1)").forEach(item => item.style.backgroundColor = "red");
document.querySelectorAll("li:nth-child(2)").forEach(item => item.style.backgroundColor = "orange");
document.querySelectorAll("li:nth-child(3)").forEach(item => item.style.backgroundColor = "yellow");
document.querySelectorAll("li:nth-child(4)").forEach(item => item.style.backgroundColor = "green");



