let arr = [1,2,4,5,6];

arr.forEach(function printVal(val){
    console.log(val);
});

let city = ["Pune","Delhi","Mumbai","Hyderabad","Kolkata"];

city.forEach((val) => {
    console.log(val);
})

// at same time we can print 3 valuein for each loop 

city.forEach((val,idx,city)  => {
    console.log(val,idx,city);
})