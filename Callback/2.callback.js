function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}

calculator(2,3,sum); // dont pass like sum()
// 5

// you can also pass like

calculator(3,4,(a,b)=>{
    console.log(a+b)
})
