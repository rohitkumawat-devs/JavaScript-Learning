// Select the first <div> (the parent div)
let parent = document.querySelector("div");

console.log(parent);

// =========================
// firstChild
// =========================
console.log("firstChild:");
console.log(parent.firstChild); 
// May return a text node (space/newline).

// =========================
// lastChild
// =========================
console.log("lastChild:");
console.log(parent.lastChild);
// May return a text node.

// =========================
// children
// =========================
console.log("children:");
console.log(parent.children);
// Returns only HTML elements.

// Access children using index
console.log(parent.children[0]); // <div>Avengers</div>
console.log(parent.children[1]); // <h1>Hulk</h1>
console.log(parent.children[2]); // <h2>Spider Man</h2>

// =========================
// childNodes
// =========================
console.log("childNodes:");
console.log(parent.childNodes);
// Returns elements + text nodes.