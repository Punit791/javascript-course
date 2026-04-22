
const coding = ["js","ruby","java","cpp","python"]

const values = coding.forEach( (item) => {
    // console.log(item);
    return item 
} )
// console.log(values);   //  Ye return nahi hota hai (forEach) me return key word (return(item))  ho ya naa ho 
// foreach loop value ko return nahi karta hai
//  filter value ko return karta hai 
//  FILTER  

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter ( (num) => num > 4 )
const newNums = myNums.filter ( (num) => {
    return num > 4 
} )  //  jab hum scope {}  ka use karte hai to return likhna padta hai 

// console.log(newNums);



//  foreach loop ka use  karna
const myNum1 = [1,2,3,4,5,6,7,8,9,10]

const newNum1 = []
myNum1.forEach( (num) => {
    if ( num < 4 ){
        newNum1.push(num)
    }
} )
// console.log(newNum1);




const books = [
    { title: "Book one", genre:"Fiction",publish:1981,edition:2004 },
    { title: "Book two", genre:"Non-Fiction",publish:1992,edition:2008 },
    { title: "Book three", genre:"History",publish:1999,edition:2007 },
    { title: "Book four", genre:"Non-Fiction",publish:1989,edition:2010 },
    { title: "Book five", genre:"Science",publish:2009,edition:2014 },
    { title: "Book six", genre:"Fiction",publish:1987,edition:2010 },
    { title: "Book seven", genre:"History",publish:1986,edition:1996 },
    { title: "Book eight", genre:"Science",publish:2011,edition:2016 },
    { title: "Book nine", genre:"Non-Fiction",publish:1981,edition:1989 },    
];
// const userbooks = books.filter( (bk) => bk.genre === "History" )
// const userbooks = books.filter( (bk) => {
//     return bk.publish >= 1995} )

const userbooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
} )

console.log(userbooks);
  
