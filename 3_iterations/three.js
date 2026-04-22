// for of

// ["" , "" , ""]
// [{} , {} ,{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello worldl !"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

// MAPS

const map = new Map() // map uniuq value me aate hai
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

// console.log(map);

for (const [key, value] of map) {    // key , value ko ese karne par array destructuring ho aata hai 
    // console.log(key , ":-" ,value);
    
}

const myObject = {
    game1 :"NFS",
    game2:"spiderman"
}
// for (const [key , value] of myObject) {
//     console.log(key , ":-",value);
    
// }   ye run nahi hoga kyuki object   iterable   nahi hai isliye .