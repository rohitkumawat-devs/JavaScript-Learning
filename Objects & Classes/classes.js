class ToyotaCar{ 
    // when a new object is created first constructor is invoked 
    constructor(){
        console.log("Creating new Object");
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }

    setBrand(brand){
        this.brand = brand; // this.brand is object property 
    }
}


// creating object of class
let fortuner = new ToyotaCar();

console.log(fortuner);
fortuner.setBrand("fortuner") // here we set its brandname 
console.log(typeof(fortuner)); // object 

// here in prototype start , stop are already defined 

console.log(fortuner.start());
console.log(fortuner.stop());

// similiarly 
let lexus = new ToyotaCar();
console.log(lexus.start());