// //values which are in the brackets ->parameters
// function addTwoNumber(a,b) {
// console.log(a+b);
// }

// addTwoNumber(23,14) //vaues which are inside the bracket. The value that you pass->argumenets
// addTwoNumber(23,"14")
// addTwoNumber("23",14);
// addTwoNumber(23,null)
// addTwoNumber(23,undefined)


// function loginUserMessage(username){
//     // return `${username} you are logged in`
//     if (!username){
//         return console.log("please enter your name ");
//     }
//     else{
//     return `${username} you are logged in`
        
//     }
// }

// console.log(loginUserMessage("jofin"));






//usign rest operator in the functions parameter

/* often there will be a time were you dont have defined number of arguments such as shopping cart example , where an user can add as much of product in his cart. According to that we need to define our parameters */

// function calculateCartPrice(...cart){ // you simply need to add one parameter, and can pass as much argument as you want
//     return cart
// }

// console.log(calculateCartPrice(200,300,400)); //the result will be in array


// function calculateCartPrice(num1,num2,...cart){
//     return cart
// }

// console.log(calculateCartPrice(200,300,400,500,600)); //the result will be in array, but it will only print 400,500 and 600 because num 1 and num 2 has already took 200 adn 300







const user1={
    name:"jofin",
    age:"23"
}

const user2={
    name:"jomin",
    age:"18"
}


function handleObject(anyObject){
    console.log(`hello ${anyObject.name} and you are ${anyObject.age}`);
}

handleObject(user1)

handleObject(user2)

//or

handleObject({
    name:"mini",
    age:50
})


//lets say you need to do that same procedure with array
const myNewArray=[200,400,800,900]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log( 
returnSecondValue(myNewArray)
);
console.log(returnSecondValue([300,400,500,900,700]));