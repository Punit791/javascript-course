const name ="punit"
const repocount = 10

console.log(name + repocount + " value");


// String interpolation

console.log(`hello my name is ${name } and my repo count is ${repocount}`);


console.log("---------------------");

const gameName = new String("punit-mishra")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.__proto__.toUpperCase)



// String immutable 
// iski wajas se original value change nahi hota hai jabki new string return karta hai (method)
// je sab dekhne ke liye crome me inpect me jana hai or console me likh hai tab milega 
// method 

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("u"));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(0,4)
console.log(anotherString);

// Normal case me dono same
// Negative index chahiye → slice() use karo
// Real world me mostly slice() prefer hota hai



const newStringOne = "  Punit  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://punit.com/punit%20conutty"

console.log(url.replace("%20","-"));
console.log(url.includes("punit"));
 
console.log(gameName.split("-"));
