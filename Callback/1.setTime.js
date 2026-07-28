function call(){
    console.log("Hello");
}

setTimeout(call,4000); // here 4000ms equal to 4sec it will run after 4 sec of prog execution 

// we can also write it as

setTimeout(()=>{
    console.log("After 2 sec")
},2000);

console.log("I will not wait"); // in this it will not either wait 2 or 4 sec 
console.log("Asynchronos Running"); // everything run parallely without waiting for anyone 
