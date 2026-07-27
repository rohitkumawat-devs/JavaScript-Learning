let data = "this is secret data"

class user{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log(`${this.name} : ${this.email}`); // you cant acess then directly must use this 
        console.log(data);
    }
}

class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data = "new data";
        }
}

let rohit = new user("rohit","rohit@gmail.com");
rohit.viewData();

let karan = new Admin("karan","karan@gmail.com");
console.log(karan);
karan.viewData();
karan.editData();
karan.viewData();
