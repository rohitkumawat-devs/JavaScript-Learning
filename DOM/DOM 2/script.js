// get Attribute

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);


let para = document.querySelector("p");
console.log(para.getAttribute("class"));


// set Attribute 


console.log(para.setAttribute("class","newClass"));
console.log(para.getAttribute("class"));

// to change css

let Div = document.querySelector("div");
Div.style.backgroundColor = "Green"; 
Div.style.fontSize = "26px";


// to change value

// Div.innerText = "Hello!"

// we can even set its visibilty to hidden 

// Div.style.visibility = "Hidden";            this will hide the visibilty 
