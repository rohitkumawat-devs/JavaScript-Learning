let marks = [12,34,32,46,85,43,67];
let sum = 0;
let len = marks.length;
for(let i=0;i<len;i++){
    sum+=marks[i];
}
let Avg = (sum/len);
console.log("Average Marks = ", Avg);