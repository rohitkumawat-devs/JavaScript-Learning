// function getData(data,getDataNext){
//     setTimeout(()=>{
//         console.log("data = ",data)
//         if(getDataNext){
//             getDataNext();
//         }
//     } , 2000);
// }

// calback hell 

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);
//         })
//     });
// });


// promise Chaining

function getData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data :",data);
            resolve("Success"); 
        },5000);
    })
}


// let p1 = getData(1);
// p1.then((res)=>{
//     console.log(res);
// });



// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//     });
// });


// actual promise chaing

getData(1).then((res)=>{
    return getData(2);
}).then((res)=>{
    return getData(3);
}).then((res)=>{
    console.log(res);
})