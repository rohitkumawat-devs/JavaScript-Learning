const getPromise =  ()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a Promise");
        // resolve("Success!");
        reject("Error!");
    });
}

let promise = getPromise();
promise.then((res)=>{
    console.log("Promise FulFilled",res);
});

promise.catch((err)=>{
    console.log("Error Ocurred",err);
})