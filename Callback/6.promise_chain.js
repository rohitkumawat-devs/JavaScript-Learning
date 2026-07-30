function asynFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Some Data");
            resolve("success");
        },3000);
    })
}

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Some Data2");
            resolve("Success");
        },4000)
    })
}

// console.log("fetching data 1............");
// let p1 = asynFunc();
// p1.then((res)=>{
//     console.log(res);
//     console.log("fetching data 2............");
//     let p2 = asyncFunc2();
//     p2.then((res)=>{
//         console.log(res);
//     })
// });

console.log("fetching data 1............");
asynFunc().then((res)=>{
    console.log(res);
    console.log("fetching data 2............");
    asyncFunc2().then((res)=>{
        console.log(res);
    })
});