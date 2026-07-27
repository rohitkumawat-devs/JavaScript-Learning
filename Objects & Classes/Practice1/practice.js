class user{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log(`${this.name} : ${this.email}`); // you cant acess then directly must use this 
    }
}


let rohit = new user("rohit","rohit@gmail.com");
rohit.viewData();