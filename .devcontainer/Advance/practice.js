function SetUserName(username){
this.username=username
console.log("called");
}

function CreateUserName(username,email,password){
SetUserName.call(this,username)
this.email=email;
this.password=password;
}

const user=new CreateUserName("jofin","j@gmail.com",123)
console.log(user);