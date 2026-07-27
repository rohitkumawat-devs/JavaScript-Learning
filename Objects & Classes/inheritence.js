class person{
    constructor(){
        this.species = "human";
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
    // same method override method overriding 
    work(){
        console.log("Solve Problems! Build Something");
    }
}


let rohit = new Engineer();
rohit.work();
rohit.eat();
rohit.sleep();
console.log(rohit);
