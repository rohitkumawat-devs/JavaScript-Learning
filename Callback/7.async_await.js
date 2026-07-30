function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000)
    })
}

async function getWeatherdata(){
    await api(); //1
    await api(); //2
}


function getData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data :",data);
            resolve("Success"); 
        },5000);
    })
};

(async function data(){
    await getData(1);
    await getData(2);
})();
