function getData(data,getDataNext){
    setTimeout(()=>{
        console.log("data = ",data)
        if(getDataNext){
            getDataNext();
        }
    } , 2000);
}

// calback hell 

getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4);
        })
    });
});


