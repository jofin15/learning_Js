function SetUserName(username){

    //complex Db calls

    this.username=username
    console.log("called")

}

function createUser(username,email,password){
SetUserName.call(this,username)
this.email=email
this.password=password
}

const chai=createUser("jofin","a@gmail.com","123")
console.log(chai);