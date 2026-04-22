function saymyname(){
    console.log("p");
    console.log("u");
    console.log("n");
    console.log("i");
    console.log("t");
    
}
// saymyname  //( THIS IS REFERENCE ON THE FUNCTION) // ye run nahi hoga 
saymyname()    //( THIS IS EXECUTE THE FUNCTION) 



// function addTwoNumber(number1 , number2) {   // number1 and number2 is parameter
//     console.log(number1 + number2);   
// }
// addTwoNumber(3,5)  // //   3 and 5 is arguments



function addTwoNumber(number1 , number2) {
    let result = number1 + number2
    console.log("punit"); // return hone ke baad kuch nahi print hota hai isliye return se pahle hi console karna chahiye 
    return result  // niche wala bhi sahi hai dono me se ek hi 
    // return number1+number2 // hum ese hi return kar sakte hai ye to (return result) ese dono me se ek hi 
}
const result = addTwoNumber(3 , 5)
console.log("Result : ",result);  //   (return result)  iski wajah se hi value return ho raha hai  warna Result:undefined aata .


// function loginUserMessage(username = "sam") {
function loginUserMessage(username) {
    // if (username === undefined) {
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in `
}
// console.log(loginUserMessage("punit"));
// console.log(loginUserMessage());


// function calculateCartPrice(...num1) {
function calculateCartPrice(val1 , val2, ...num1) {
    //  ... opertor ko Spread Syntax ya Rest , Parameter kahte hai
    return num1
}
// val = 200 , val 2 = 400 . ye nahi aayega kyuki (return num1) ho raha hai  baaki ki value aayega 500,300,100
console.log(calculateCartPrice(200,400,500,300,100));


const user = {
    username: "Punit",
    price:199
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);    
}
handleObject(user)
// handleObject({
//     username:"sam",
//     price:399
// })


const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200,400,500,100]));
