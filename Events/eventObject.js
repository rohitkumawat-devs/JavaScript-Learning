let btn = document.querySelector("button");

btn.onclick = (e)=>{
    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.target);
}

let div = document.querySelector("div");

div.onmouseover = (e)=>{
    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.target);
}