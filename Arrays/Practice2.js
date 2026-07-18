let offer = prompt("Enter the percentage of Offer");
let item = [10,20,30,40];
let sum = 0;
let len = item.length;
for(let i =0;i<len;i++){
    sum+=item[i];
}

console.log("Item without discount = ",sum);
let finalPrice = sum - (offer/100)*sum;
console.log("Item After Discount = ",finalPrice);