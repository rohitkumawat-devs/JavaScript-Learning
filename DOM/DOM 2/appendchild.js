// Create a new h1 element
let newHead = document.createElement("h1");

// Add text to the h1
newHead.innerText = "Hi! I'm Child";

// Add the h1 as the last child of the body
document.body.appendChild(newHead);

// Remove the h1 from the body
document.body.removeChild(newHead);