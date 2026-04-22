// primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol ,BigInt

// javaScript is a dynamically typed language 

const score = 100
const scoreValues = 100.322  // iska types of number hota hai 
console.log(typeof scoreValues);

const isLoggedIn = false
const outsideTemp = null // iska types of object hota hai
console.log(typeof outsideTemp);

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber =234567889012n
console.log(typeof bigNumber);


console.log("--------------------------------------------");





// Reference (Non primitive)

// Array , Objects , Functions

const heros = ["shaktiman","naagraj","doga"]  // iska bhi types of object hota hai
console.log( heros);

let myobj = {
    name :"punit",
    age : 22
}
console.log(myobj);

const myFunction = function(){
       console.log("hello world ");
}
console.log(typeof scoreValues);



//**********************************memory  */

// Stack(primitive )  

let myyoutubename = "punit mishra"
let myyoutube=myyoutubename
myyoutube="mishra"
console.log(myyoutube);
console.log(myyoutubename);


//   Heap (non - primitive)

let userone={
    email:"punit@gmail.com",
    upi:"user@123"
}
let usertwo=userone

usertwo.email ="mishra@gmail.com"

console.log(userone.email);
console.log(usertwo.email);

