class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username) //effective and strong alternative for call method , which automatically carries this method along with username to the User class and assign its value 

        this.email=email;
        this.password=password;

    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai=new Teacher("jofin","jofin@gmail.com",122)
console.log(chai.addCourse());

const tea=new User("jomin")
console.log(tea.logMe());

console.log(chai.logMe());

console.log(chai===tea);
console.log(tea instanceof Teacher);
console.log(tea instanceof User);
