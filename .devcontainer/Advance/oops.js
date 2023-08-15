// const user={
//     userName:"jofin",
//     pid:191007,
//     signIn:true,

//     getUserDetails: function(){
//         console.log(`username: ${this.userName}`); //this:- refering to this context username       

//         console.log(this);
//     }
// }

// const user2={
//     userName:"jomin",
//     pid:191008,
//     signIn:true,

//     getUserDetails: function(){
//         console.log(`username: ${this.userName}`); //this:- refering to this context username       

//         console.log(this);
//     }
// }

// console.log(user.getUserDetails());
// console.log(user2.getUserDetails());
// console.log(this); //this global context will print empty object




function User(username,loginCount, isLoggedIn){

    //variable or properties
console.log(this);
this.username=username;
this.loginCount=loginCount;
this.isLoggedIn=isLoggedIn

//methods or functions 
this.greetings=function(){
    console.log(`${this.username}`);
}
}

const userOne=new User("jofin",12,true)
const userTwo=new User("jomin",12,true)

console.log(userOne instanceof User)
console.log(userOne instanceof Object)


//note:-
//step 1
//when you write new keyword , you create an empty object (instance). 

//step 2
//you create a constructor using new keyword, and fill all the arguments that you need to pass to the class or function 

//step 3
//this keyword will inject all the parameters into the created object 


//step 4
//you can create multiple instances using constructor


