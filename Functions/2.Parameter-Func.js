
// prompt always give string so we convert it to number

let num1 = Number(prompt("Enter no 1"));
let num2 = Number(prompt("ENter no 2"));
function sum(num1 ,num2){
    let add = num1+num2;
    alert("Sum is "+  add);
}

sum(num1,num2);