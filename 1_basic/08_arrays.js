// arrays 

const myArr = [12,11,12,33,44,53]
const myheros = ["iron man"  ,"naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]); // index values deta hai . 0=12, 1=11
console.log(myArr2[1]);

//array methos 

// myArr.push(7) // push method add karta hai values ko
myArr.push(81)
console.log(myArr);

myArr.pop() // last  values ko delete karna 
console.log(myArr);


// myArr.unshift(9) // add karta hai values ko started point per
// console.log(myArr);

// myArr.shift() // delete karta hai values ko started point per
// console.log(myArr);

console.log(myArr.includes(9)); // serach karta hai values ko hai ki nahi . hai to true warna false
console.log(myArr.indexOf(11)); // kon se index per values hai ye batata hai

// const newArr = 

// slice , splice
console.log("A",myArr);

const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2=myArr.splice(1,3)
console.log("c",myArr);
console.log(myn2);






