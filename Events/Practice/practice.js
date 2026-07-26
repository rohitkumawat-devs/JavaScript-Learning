let btn = document.querySelector("button");
let body = document.querySelector("body");
let currMode = "light";
btn.addEventListener("click",()=>{
    if(currMode==="light"){
        body.style.backgroundColor="black";
        currMode="dark";
    }
    else{
        body.style.backgroundColor= "white";
        currMode="light";
    }
})