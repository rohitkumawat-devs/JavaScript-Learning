let arr = [2,46,543,8,6,3];

let even = arr.filter(
    (val) => {
        return val%2===0;
    }
)

let multiple3 = arr.filter(
    (val) => {
        return val%3===0;
    }
)

console.log(even);
console.log(multiple3); 