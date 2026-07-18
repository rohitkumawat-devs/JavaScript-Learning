let foodItems = ["Apple","Banana","Orange","Litchi"];
console.log(foodItems);

// pushing items in the existing array
foodItems.push("Chips","Papaya");
console.log(foodItems);

// pop the items
let deleted = foodItems.pop();
console.log(foodItems);

// to convert it to a string 
console.log(foodItems.toString())

// to concatenate 2 arrays
// it does not change the original array 
let marvelHeroes = ["Ironman","SpiderMan","Hulk"];
let dcHeroes = ["SuperMan","BatMan"];
let heroes = marvelHeroes.concat(dcHeroes);
console.log(heroes);
console.log(heroes.toString());

// to add and delete at the start we can use
heroes.unshift("AntMan");
console.log(heroes.toString());
let deletedHero = heroes.shift();
console.log(deletedHero);
console.log(heroes.toString());

// to slice an Array 
console.log(heroes.slice(1,2));
console.log(heroes);

// to delete and replace we use splice
console.log(heroes.splice(1,2,"CaptainAmerica","DeadPool"))
console.log(heroes);
