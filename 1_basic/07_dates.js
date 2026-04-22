 let mydate =new Date()
//  console.log(mydate);
 
 console.log(mydate.toString());
 console.log(mydate.toDateString());
//  console.log(mydate.toLocaleDateString());
//  console.log(mydate.toLocaleString());
// console.log(typeof mydate);

 console.log("-----------");
 
let mycreatedate = new Date(2023, 0, 23)
// let mycreatedate =new Date(2023, 0, 23,5,3)

// let mycreatedate =new Date("2023-01-14")

// let mycreatedate =new Date("01-14-2023")

console.log(mycreatedate.toLocaleString());

let mytimestamp = Date.now()   // kisne kitni jaldi quiz compelet kiya isliye timestamp hota hai .

console.log(mytimestamp);    // mini second deta hai . 
console.log(mycreatedate.getTime());   // ye apne variable ki value ka mini second de raha hai jisse dono value ko compare kiya jaa sake 
console.log(Math.floor(Date.now()/1000));  // mini second se second me kiya  // floor se point ki value hat jati hai 2.333 se 2 ho jaayega 

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth()); // 0 se suru hota hai . january = 0 ;
console.log(newdate.getMonth()+1);  // ese karne par sahi aa jayega 

console.log(newdate.getDay());  // monday means 1  . 


// string interpolation karna ho to 
`${newdate.getDay()} and the time `
console.log( `${newdate.getDay()} today  `);



//  console.log(mydate.toLocaleString());   //  isse jo output aa raha hai usko or customize karna hai to niche dekho 

newdate.toLocaleString("default", {   // pahle string("default") dete hai uske baad object({weekday:long}) 
    weekday: "long"   
})