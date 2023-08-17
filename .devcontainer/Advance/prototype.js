// function multiplyBy5(num){
//     return num*5
// }
// multiplyBy5.power=20
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

//here we can understand that in javascript everythign (String , Number ,Date, Boolean and even function act as object or are objects)


//note :-
//this ,new ,constructor , objects ,class this all belongs from protoypes


// function createUser(username,score){
//     this.username=username;
//     this.score=score
// }

// createUser.prototype.increment=function(){
//     this.score++
// }
// createUser.prototype.printMessage=function () {
//     console.log(`score is ${this.score}`);
// }
// const chai=new createUser("jofin",25)
// const tea=new createUser("jomin",250)
// chai.increment()
// chai.printMessage()



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/




//understanding the actual implementation of prototypes

// let myHeros=["spiderman","batman"]

// let herPower={
//     spiderman:"swing",
//     batman:"guts",
//     jofin:"genius",
//     newMembers:function(){
//         console.log(`he is ${this.jofin}`);
//     }
// }

// Object.prototype.jomin=function () {
//     console.log("i am the new superhero ");
// }

//here  you can see that you have created a function at a top level objects ("jomin"). since objects and arrays are both object iteslf , so the created function can be used on the array or the above object as well , your created function will flow from top to bottom 

// herPower.jomin();
// myHeros.jomin()



//example 2
//what if you create a customized fucntion and inject that inside the array , will it flow from array to object

// Array.prototype.hiJofin=function(){
//     console.log("hello this is jofin ");
// }
// console.log(myHeros.hiJofin());
// console.log(herPower.hiJofin()); //you will get an error

//note you cannot give power of your customized function to the above object

 


//perfect use of protoype

let userName="jofin    "

//declaring truelength function to the entire string property
String.prototype.trueLength=function () {
    console.log(`${this}`);
    console.log(`true length ${this.trim().length}`);
}

userName.trueLength()
"jomin     ".trueLength()
"johnson".trueLength()