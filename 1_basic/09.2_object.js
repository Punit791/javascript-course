// const tinderUser =new Object()      ... this is single team object
const tinderUser = {};
// this is non single team object

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "punit",
      lastname: "mishra",
    },
  },
};
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
// 1 is key and a is values (key, values)
const obj2 = { 3: "c", 4: "d" };

// const obj3 ={ obj1, obj2}

// const obj3 = Object.assign( {},obj1 ,obj2)
// {} target, obj1 and obj2 is source

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const users =[
    {
        id:1,
        email:"p@gmail.com"
    },
    {
        id:2,
        email:"m@gmail.com"
    }
]
console.log(users[1].email)

console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogged"));
// hasOwnProperty ,,, this is check the property


// **************************************
// ******OBJECT DE STRUCTURE AND JSON API ***************

const course ={
      coursename:"js in hindi",
      price:"999",
      courseInstrucotor: "punit"
}
course.courseInstrucotor
const{courseInstrucotor: instrucotor}=course //pahle hum (courseInstrucotor) value ko (instrucotor) isme rakhege 
// console.log(courseInstrucotor);  // ye run nahi hoga kyuki object ko call karne ke liye course.courseInstrucotor  ese karte hai 
console.log(instrucotor);   // rakhne ke baad ye bina object ke bhi call ho jaayega 

// ******react***********
// const navbar =({company}) =>{

// }
// navbar(company="punit")

// *******JSON(API)********
  // {
  //   "name":"punit",
  //   "coursename":"js in hindi",
  //    "price":"free"
  // }

// ARRAYS[API]
[
  {},
  {}

]