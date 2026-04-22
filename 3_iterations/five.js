// for each

const coding = ["js","ruby","java","cpp","python"]

coding.forEach( function (val) {   // foreach me callback hota hai , isliye function ka naam nahi likhege.
    // console.log(val);
    
})

coding.forEach( (item) =>{
    // console.log(item);
    
} )

function printme(item) {
    console.log(item);
    
}
// coding.forEach(printme)   // yaha par function ka reference dena hai (printme) na ki usko call karna hai (printme())


coding.forEach( (item,index,arr) => {
    // console.log(item,index,arr);
    
})


const myCoding =[
    {
        languageName : "javascript",
        languageFilename : "js"
    },
      {
        languageName : "java",
        languageFilename : "java"
    },
      {
        languageName : "Python",
        languageFilename : "py"
    },
]

myCoding.forEach( (item) =>{
        console.log(item.languageName);
         console.log(item.languageFilename);
} )