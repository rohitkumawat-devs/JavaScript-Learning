var age = 23;
var age = 45;
var age = 56;
console.log(age); // it will print 56 bcoz it declared at the end 

let fullName = "Rohit";
// let fullName = "Pankaj";// it will show error you can't redeclare the same variable using let
// but you can update the let keyword 
fullName = "Tonny"; 
console.log(fullName);

// not update 
const PI = 3.14;
console.log(PI); // this cannot be updated 

let a;// here it will show undefined 
console.log(a);
const b; // here it will show error bcoz cosnt must be initialize first 