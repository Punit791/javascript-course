const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);
 
 
// const allheros =   marvel_heros.concat(dc_heros)
// console.log(allheros);



// const all_new_heros =[... marvel_heros, ... dc_heros]  //  "Spread Operator" (...) :- "Purane arrays ko khol ke, unke elements ko naye array me faila (spread) dena."
// console.log(all_new_heros);


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log (Array.isArray("punit"))// isarrays pata kiya ki ye arrays hai ki nahi true ya false me 
console.log(Array.from("punit"));// .from arrays me change kiya 

console.log(Array.from({name:"punit"})) // interesting  // .from ko batana padega ki pahle kisko change karu key(name) ko ki value(punit)ko 

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));

