let company = ["Uber","Ola","Rapido","Swiggy","Google","Microsoft"];
console.log(company.toString());

// remove 1st company from the array 
company.shift();
console.log(company.toString());

// replace ola and Bolt at its place
company.splice(1,1,"Bolt");
console.log(company.toString());

// Add Amazon at the end
company.push("Amazon");
console.log(company.toString());