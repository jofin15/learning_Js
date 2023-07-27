// you can declare objects with two form singleton and object literals

const mySym=Symbol("Key1")
// console.log(typeof mySym);

//Using object literals 
const JsUser={
    name:"jofin",
    "full-name":"jofin johnson",
    [mySym]:"myKey1",
    age:23,
    location:"Mumbai",
    email:"jofinjomin@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Friday"]
}

//you can access the oject using two methods 
//1. Dot Notation
// console.log(JsUser.email);

//2. Square Bracket
// console.log(JsUser["email"]);


//both are right but it is preferred to used the second method . Because

// console.log(JsUser["full-name"]); //here if you see when you try to enter fullname with using first method to access object elements, ide will automatically convert those synatax into the second method

//you cannot write like this
// console.log(JsUser.full-name);

// console.log(JsUser[mySym]);


//Changing the value of the object elements
JsUser.email="jomin@gmail.com"
// console.log(JsUser.email);


//if you dont want anybody change anything on the object, use freeze 
JsUser.age=20;
// console.log(JsUser.age); //before freeze one can change the key value
// Object.freeze(JsUser) //after the freeze no changes
// JsUser.age=22;
// console.log(JsUser.age); //no changes

console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello world");
}

JsUser.greeting2=function(){
    console.log(`hello brother ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());