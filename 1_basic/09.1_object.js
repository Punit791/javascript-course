// const tinderUser = new Object()

const tinderUser={}
tinderUser.id ="123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Punit",
            lastname:"Mishra"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1: "a", 2: "b"}
const obj2 ={1: "a", 2: "b"}

const obje3 ={
    obj1,obj2
}

console.log(obje3);
