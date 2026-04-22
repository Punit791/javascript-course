// Singleton
  // Object.create

//Object literals

const mySym = Symbol("key1")


const jsUser ={
    name:"Punit",
    "fullname":"punitmishra",
    [mySym]:"mykey1",
    age: 18,
    location:"jaipur",
    email:"punit@123gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","saturday"]
}


// console.log(jsUser);

// console.log(jsUser.lastLoginDays);
// console.log(jsUser["lastLoginDays"]);
// console.log(jsUser["fullname"]);
// console.log(jsUser[mySym]);

jsUser.email ="punit@chatgpt.com"
// Object.freeze(jsUser)


jsUser.email="punit@microsoft.com"
// console.log(jsUser);

jsUser.greeting =function () {
    console.log("hello js user");
    
}

jsUser.greetingtwo =function () {
    console.log(`hello js user, ${this.name}`);
    
}


console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());



