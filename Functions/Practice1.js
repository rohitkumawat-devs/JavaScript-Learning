function Vcount(str){
    let count =0;
    str.toLowerCase();
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)==='a' || str.charAt(i)==='u' ||str.charAt(i)==='o' ||str.charAt(i)==='i' ||str.charAt(i)==='e' ){
            count++;
        }
    }
    return count;
}

console.log(Vcount("Rohiuvet"));