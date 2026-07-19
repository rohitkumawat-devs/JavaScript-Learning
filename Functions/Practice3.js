let arr  = [2,3,45,64,2,45,9];

arr.forEach( (val) => {
    console.log(val*val);
})

// other way 

function square(val){
    console.log(val*val);
}

arr.forEach(square);


