// let a =10
// const b =20
// var c= 30     // note :- var sabse purana variable declaration ka tarika hai but ab use nahi karte hai
// (scopes) ki wajah se,ya to (block code)


// console.log(a);
// console.log(b);
// console.log(c);
 
// note :- scope isko bolte hai { }  jab ye function{} ya if else{} ke sath aata hai 
// note :- function{} ka scope ya if else{} ka scope

// note :- object {} ke sath nahi bolte hai usko object declaration bolte hai.

var c = 300

if(true){
    let a =10
    const b =20
    var c = 30
}
// console.log(a);
// console.log(b);
// console.log(c);
  

// note :- ye ek scope ya block code hai 
// . isme a or b sahi hai print nahi hona chahiye .
// . mene return nahi kar raha hu function ko to print nahi hona chahiye 
// . but c print ho raha hai kyuki isme (var) ka use hai
// . isliye variable declaration me (var ) ka use nahi karna chahiye
// . isme mene c ko do value diya hai tabhi bhi run ho raha hai jabki nahi hona chahiye tha 


// note :- 

// // if(true){
//     let a =10
//     const b =20
//     var c = 30
// }  
//  {} iske andar jo abhi hai matlb if(){}iske andar jo bhi hai usko
//(block scope) karte hai
// iske bahar jo sikhege woh (golbal scope) kahte hai
// hum (golbar scope) ke under jo bhi likhte hai vo value block scope ke liye available rahti hai 
// but (block scope ) ki value (golabl scope ya bahar) nahi jaani chahiye.

console.log("------------");

let d = 300 

if (true){
    let d = 50
    // console.log("INNER:",d);
    
}
// console.log(d);

console.log("--------------");


// NESTED SCOPES

function one(){
    const username = "punit"
    function two(){
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);   // ye run nahi hoga kyuki inner scope bahar wale scope me run nahi hota hai .
    two() // execution
}
one()   // execution

// chlid function (two) apne parent function(one) ko access kar paate hai 


if(true){
    const username = "punit"
    if(username === "punit"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website); // ye run nahi hoga 
    
}
// console.log(username);   // ye run nahi hoga
 

// ++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))

function addone(num) {   // ye bhi function hai 
    return num + 1  // A. isme function decrestion se pahle execution kar sakte hai 
}



// HOISTING 

const addtwo = function (num) {   // ye bhi function hai ya isko expresion bhi bolte hai .
    return num + 2
} // B .  but isme esa nahi hota hai isliye  ye HOISTING hai
console.log(addtwo(5));
