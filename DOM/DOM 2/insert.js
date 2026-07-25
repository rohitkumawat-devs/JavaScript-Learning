// Created a New Element
let newbut = document.createElement("button");
newbut.innerText="click me";
console.log(newbut)

// Inserted New Element 
let div = document.querySelector("#listed");
div.append(newbut); // this will be appended inside the div but at the end 

// Insert New Element at the End of the Element (Inside)

div.prepend(newbut);

// Insert outside element and before

div.before(newbut);

// Insert outside and after the <<<<<<<<<<paragraph>>>>>>>>>>

let para = document.querySelector("p");
para.after(newbut);



// similarly let add heading
let newheading = document.createElement("h1");
newheading.innerHTML= "<i>Hi! This is New</i>";

let bod = document.querySelector("body");
bod.prepend(newheading);



