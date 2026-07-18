const student = {
    fullName : "Rohit Kumawat",
    age : 21,
    cgpa : 9.4,
    branch : "Cse",
    isPass : true,
};

console.log(typeof(student));

// to print we have 2 ways
// 1.
console.log(student.age);
// 2.
console.log(student["age"]);

// even we can update the const key but we can't update the const variable 
student.age = student.age +1;
console.log(student.age); // here we will get the updated value 
