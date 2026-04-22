// for in

const myObject = {
    js : "javascript",
    cpp :"C++",
    rb: "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
   
}

const  programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
//    console.log(key);   // forin loop me ese arrays ki keys milta hai .
   
    // console.log(programming[key]);
    
}

const map = new Map() 
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

for (const key in map) {
    
    // console.log(key);   // ye run hoga but output nahi aayega kyuki ye enumerable nahi hai .
    
}