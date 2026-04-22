// Immediately Invoked Function Expressions (IIFE)

(function chai(){
  //name IIFE
  console.log(`DB CONNETED`);
  
})();

( (name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
    
} )("Punit");