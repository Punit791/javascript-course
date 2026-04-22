// reduce()

const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
// (accumulator = 0, currentValue = 1), accumulator + currentValue (0+1=1), initialValue,(0)

// console.log(sumWithInitial);
// Expected output: 10


const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc :${acc} and currval:${currval} `);
//     return acc + currval  
// },3)

const myTotal = myNums.reduce( (acc,curr) =>{
    // console.log(`acc :${acc} and currval:${curr}`);
    return acc+curr;
},0);
// console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js course",
        price:2999
    },
    {
        itemName : "py course",
        price:999
    },
    {
        itemName : "mobile dev course",
        price:5999
    },
    {
        itemName : "Data science course",
        price:12999
    },

]
const priceTopay = shoppingCart.reduce( (acc,item) => acc + item.price,0)
console.log(priceTopay);
