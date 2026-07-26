let btn  = document.querySelector("button");

btn.addEventListener("click",()=>{
    console.log("Handler 1 Clicked");
})

btn.addEventListener("click",(evt) =>{
    console.log("Handler 2 Clicked at "+ evt.clientX + " " + evt.clientY);
})

btn.addEventListener("click",()=>{
    console.log("Handler 3 Clicked");
})

let func = ()=>{
    console.log("Handler 4 Clicked");
}
btn.addEventListener("click",func)

// remove a eventlistener

btn.removeEventListener("click",()=>{
    console.log("Handler 3 Clicked");   /// this will not work 
})

// we have to pass same addrsss
btn.removeEventListener("click",func); // handler 4 removed