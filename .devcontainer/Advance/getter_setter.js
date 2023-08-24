//using setter and getter method on class 
// class User{
// constructor (name,email,password){
//     this.name=name;
//     this.email=email;
//     this.password=password
// }

// get email(){
//     return this._email.toUpperCase()
// }
// set email(value){
//     this._email=value
// }


// get password(){
//     return `${this._password.toUpperCase()}` 
// }
// set password(value){
//     this._password=value
// }
// }
// const hitesh=new User("jofin","jofin@gmail.com","abc")
// console.log(hitesh.password);



//using setter and getter method on function

function User(email,password) {
    this._email=email;
    this._password=password

    Object.defineProperty(this,"email",{
        get email () {
            return this._email.toUpperCase()
        },
        set email (value) {
            this.email=value
        }
    })
}

const tea=new User("jofin@gmail.com",123)
console.log(tea.email);

//using setter and getter method on objects
// const User={
//     _email:"jofin@gmail.com",
//     _password:"abc",

//     get email(){
//         return this._email.toUpperCase()
//     },
//     set email(value){
//         this._email=value
//     }
// }

// const tea=