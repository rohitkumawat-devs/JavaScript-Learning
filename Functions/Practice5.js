let n = prompt("Enter a number");
let arr = [];

for(let i=0;i<n;i++){
    arr[i] = i+1;
}

let sum = arr.reduce( (res,curr) => {
    return res+curr;
})


console.log(sum);

let factorial = arr.reduce( (res,curr) => {
    return res*curr;
})


console.log(factorial);