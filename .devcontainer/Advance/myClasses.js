// class User {
//     constructor (username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }
//     encryptPassword(){
//         return `password:- ${this.password}abc`
//     }
//     changeUserName(){
//         return `username:- ${this.username.toUpperCase()}`
//     }
// }
// const chai=new User("jofin","jofin@gmail.com",123)
// console.log(
//     chai.encryptPassword()
// );
// console.log(chai.changeUserName());





//Behind the scene of the above code

function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

User.prototype.changeUserName=function(){
    return `password:- ${this.password}abc`
}

User.prototype.encryptPassword=function(){
    return `username:- ${this.username.toUpperCase()}`
}

const tea=new User("jofin","jofin@gmail.com",123)
console.log(
    tea.encryptPassword()
);
console.log(tea.changeUserName());