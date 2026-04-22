// if

const isuserLoggegin = true

if(2 ==="2" ){
    // console.log("executed");
    
}

const temperature = 41
if(temperature < 50){
    // console.log("less than 50");
}else{
    // console.log("temperature is greater than 50");
    
}
// console.log("execute");

// < , > , <= ,>=,==, != , === , !== 


const score =200
if(score > 100){
    const power = "fly"
    // console.log(`user power : ${power}`);
    
}
// console.log(`user power : ${power}`); // ye kabhi run nahi hona chahiye kyuki scope ki wahaj se 



const balance = 1000
// if(balance > 500) console.log("test"),console.log("test2"); // ese kabhi nahi karna hai pata hona chahiye par kabhi nahi karna hai.

if(balance < 500){
    // console.log("less than 500");
    
}else if(balance < 750){
    // console.log("less than 750");
    
}else if(balance < 900){
    // console.log("less than 900");
    
}else{
    // console.log("less than 1200");
    
}


const userLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true
if (userLoggedIn && debitCard && 2==2) {
    console.log("allow to buy course");   
}
if (loggedInfromGoogle || loggedInfromEmail)
    console.log("user logged in");
    
