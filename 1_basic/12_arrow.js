const user ={
    username: "Punit",
    price: 999,

    welcomeMessage: function(){
       
        console.log(`${this.username} , welcome to website `);  // current content ko refer karta hai 
        console.log(this);
        
    }
   
}
// user.welcomeMessage()
// user.username = "sam"  // content ki value change kar diya 
// user.welcomeMessage()

console.log(this);   // {}


// function chai() {
//     let username = "Punit"
//     console.log(this.username); // ( undefined ) aayega  kyuki (this)  object ke sath hi hota hai , function ke sath nahi  
    
// }
// chai()

// const one = function () {
//     let username = "Punit"
//     console.log(this.username);  // ( undefined )
// }
// one()



// **************** arrow function ( => )
const two =  () => {
    let username = "Punit"
    console.log(this.username);  // ( undefined )
}
// two()

// ********* basic arrows / expleliship return ( => ) function -*****************
// const addTwo =(num1,num2)=>{
//     return num1 + num2
// }
// console.log(addTwo(3,4));

//******************** implelishit return *//
// const addTwo =(num1,num2) => num1 + num2

// const addTwo =(num1,num2) => (num1 + num2)


// object
const addTwo =(num1,num2) => ({username: "Punit"})

console.log(addTwo(3,4));

