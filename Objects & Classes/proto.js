const employee = {
    calcTax (){
        console.log("Tax Rate is 10%");
    }
};

const karan ={
    salary :1000000,
}
const karan1 ={
    salary :2000000,
    // here this will work
    calcTax(){
        console.log("Tax Rate is 20%");
    }
}

karan.__proto__ = employee; // now in prototype it conatin calTax method 
karan1.__proto__ = employee; // in this same method in object so given high priority to it

