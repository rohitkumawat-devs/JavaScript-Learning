// forEach is used to do operation on an array
// Map is used to make new array of the operations 

let arr = [12,34,23,56,78];

let newArr = arr.map( (val) => {
    return val*val;
})

console.log(arr);
console.log(newArr);