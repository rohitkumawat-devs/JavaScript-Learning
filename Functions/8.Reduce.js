let arr = [1,78,3,4];

// reduce can be use to calculate sum 
const output = arr.reduce((res,curr)=>{
    return res+curr;
})

console.log(output);

// reduce can also be used to calculate max element 

const max = arr.reduce((res,curr)=>{
    return res>curr?res:curr;
})

console.log(max);