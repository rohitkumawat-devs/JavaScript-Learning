// this is a object 

const student = {
    fname : "Rohit",
    marks : 97.5,
    printMarks : function(){
        console.log(this.marks); // this mean student.marks
    },
};

// in above or every object one object is automatically created that is prototype

console.log(student.toString()); // we did not declare
// we are getting this from prototype object 

let arr = ["Lichi","orange"]; // in js array is an object
console.log(arr);

console.log(typeof(arr)); // this will print object

// in array we have inbuild many fuc that come from protoype object like
arr.push("Mango"); // push came from prototype

console.log(arr);