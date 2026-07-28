// let promise = new Promise((resolve,reject)=>{
//     console.log("I am promise");
//     resolve("Promise Fulfilled"); // this will get accepted
// })


// let promise1 = new Promise((resolve,reject)=>{
//     console.log("I am promise");
//     reject("Error Occured"); // this will get rejected 
// })

function getData(dataId, getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
                    console.log("data ",dataId);
                    resolve("Problem Resolved");
        },5000);
        if(getNextData){
            getNextData();
        }

    })
}

getData(10);

/* let promise = getData(10);
console.log(promise)
Promise {<pending>}
undefined
data  10
console.log(promise)
Promise {<fulfilled>: 'Problem Resolved'}
undefined
*/

function getData(dataId, getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
                    console.log("data ",dataId);
                    reject("Problem Resolved");
        },5000);
        if(getNextData){
            getNextData();
        }

    })
}

getData(10);

// in this it will give error 