// constructor is used if we want to do something during the initialization of the object 



class ToyotaCar{ 
    // when a new object is created first constructor is invoked 
    constructor(brand,milege){
        console.log("Creating new Object");
        this.brand = brand;
        this.milege = milege;
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }

}


let fortuner = new ToyotaCar("fortuner","10");
console.log(fortuner.brand);

let lexus = new ToyotaCar("Lexus","12"); // if now value given it print undefined

console.log(fortuner);
console.log(lexus);