let marks = [12,44,67,43,34];
console.log(marks);
console.log(marks[1]);
console.log(marks.length);

// array is object type
console.log(typeof(Array));

// it is possible to change a value in array 
marks[1] =99;
console.log(marks); // now 44 is replace with 99 
// this is not possible in string 

// for loop 
for(let idx =0;idx<marks.length;idx++){
    console.log(marks[idx]);
}