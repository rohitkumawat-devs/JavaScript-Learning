class person{
    constructor(name){
        this.species = "human";
        this.name = name;
    }
    sleep(){
        console.log("sleep");
    }
    eat(){
        console.log("eat");
    }
    work(){
        console.log("do nothing");
    }
}

class Engineer extends person{

    constructor(name){
        super(name); // to invoke parent class constructor 
        // it is necessary in js
        console.log(name);
    }
    // same method override method overriding 

    work(){
        // eat(); this will not work 
        super.eat();
        console.log("Solve Problems! Build Something");
    }
}


let rohit = new Engineer("rohit");
console.log(rohit);