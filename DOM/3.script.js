let heading = document.getElementById("id1"); // this will return the value

// then we can print that heading 

console.log(heading);
console.dir(heading);

// id is unique id role is to be unique for different elements 

// if we want to put multiple elements in the same category we use class 

let he = document.getElementsByClassName("head");
console.log(he);
console.dir(he);

// accessing elements by the tag name 

let paras = document.getElementsByTagName("p");
console.log(paras);
console.dir(paras);

// how to access using a query selector 

// to access the first element 
let firstele = document.querySelector("p");
console.log(firstele);

// to access more than one paragraph it will return nodes
let allEle = document.querySelectorAll("p");
console.log(allEle);

// query class for class 

let fclass = document.querySelector(".head");
console.log(fclass);

let allClass = document.querySelectorAll(".head");
console.log(allClass);

// to access id using query selector
let ide = document.querySelector("#id1");
console.log(ide);

// for accessing properties
// tagname
console.log(ide.tagName); // it wil give H1
// to print first child
console.log(document.body.firstChild) // document -> body -> firstchild mean first element of the body 

// by default we have text , comment , element 
// but we ignore text and comment and work on element 
// so for above the ans is #text 

console.log(document.querySelector("div").children);


// innertext 
let div = document.querySelector("div");
console.dir(div);
console.log(div.innerText);// in inner text pure text content 

// inner html
console.log(div.innerHTML); // it will print all html tag also

// we can even set the values 
div.innerText = "abcd";
console.log(div.innerText); // now it is set to abcd 

// set innerhtml

div.innerHTML = "<i>abcd</i>"
console.log(div.innerHTML);

// textContent even show if the visibilty is hidden 
console.log(div.textContent);