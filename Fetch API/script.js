const URL = "https://catfact.ninja/fact";
let fact = document.querySelector("#fact");
let btn = document.querySelector("#btn");

let promise = async ()=>{
    let response = await fetch(URL);
}

console.log(promise);

// using async await

let getFacts = async () => {
    console.log("Getting Data.....");
    let response = await fetch(URL);
    console.log(response.status);
    let data = await response.json();// Return second Promise 
    console.log(data.fact);
    fact.innerText = data.fact;
}


// by promise chahing 

function getFacts(){
    fetch(URL).then((response)=>{
        return response.json();
    })
    .then((res)=>{
        console.log(res.fact);
        fact.innerText = res.fact;
    })
}
btn.addEventListener("click",getFacts);