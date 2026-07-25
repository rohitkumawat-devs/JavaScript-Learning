let btn  = document.querySelector("button");

btn.addEventListener("click",()=>{
    console.log("Handler 1 Clicked");
})

btn.addEventListener("click",(evt) =>{
    console.log("Handler 2 Clicked at "+ evt.clientX + " " + evt.clientY);
})