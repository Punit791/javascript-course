const accountId =144553
let accountEmail ="punit@gmail.com"
var accountpassword ="1234"
accountcity="jaipur"
let accountState;
// accountId=2 // not allowed
accountEmail="amit@gami.com"
accountpassword ="4321"
accountcity ="bengaluru"


console.log(accountId);
/*
prefer not to use var
because of issue in block scope {} and funcational scope{}
*/

console.table([accountId,accountEmail,accountpassword,accountcity,accountState])