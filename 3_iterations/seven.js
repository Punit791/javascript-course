//  map() 
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNums =  myNumbers.map( (num) => num + 10 )
const newNums =  myNumbers.map( (num) => { return num + 10} )

// console.log(newNums);

// Chaining
const newNum1 =  myNumbers 
                    .map( (num) => num * 10 )  // 1*10 = 10
                    .map( (num) => num +1 )  // 10+1=11
                    .filter( (num) => num >= 40 ) 
// Chaining me hum baar baar method ke upar method ka use kar sakte hai 
console.log(newNum1);
