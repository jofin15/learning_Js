// //creating promise
// const promiseOne=new Promise(function (resolve,reject){

//     //do an async task
//     //DB calls , cryptography, network
//     setTimeout(() => {
//         console.log("Async task is completed");
//         resolve()
//     }, 1000);

// })


//rpomise consumption
// promiseOne.then(function(){
//     console.log("promise has been resolved")
// })


//or second method


// new Promise(function (resolve,reject) {
//       //do an async task
//      //DB calls , cryptography, network

//      setTimeout(() => {
//         console.log("Async 2 task ");
//         resolve()
//      }, 1000);
// }).then(function () {
//     console.log("Async 2 has been resolved");
// })



//third method (passing the data)

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(() => {
//     //do an async task
//     //DB calls , cryptography, network

//     console.log("Asyn 3 taks");
    
//     //lets say you recieve data through database
//     resolve({name:"jofin",email:"jfof@gmail.com"})
//     }, 1000);
// })

// //note:- then and resolve are both connected
// promiseThree.then(function (data) {
//     console.log(data)
// })



//forth promise

// const promiseFour=new Promise(function (resolve,reject) {
//     setTimeout(() => {

//     //do an async task
//     //DB calls , cryptography, network
//     console.log("Asyn 4 taks");

//     //considering errors
//     let error=false
//     if (!error){

//         // lets say you recieve data through database
//         resolve({name:"jofin",email:"jfof@gmail.com"})
//     }else{
//         reject("Error: something went wrong")
//     }
 
//     }, 1000);
// })

// promiseFour.then((user)=>{
// console.log(user)
// return user.name
// }).then((name)=>{
// console.log(name)
// }).catch((error)=>{
// console.log(error)
// }).finally(()=>{
//     console.log("the promise is either resolved or rejected")
// })



//promise  method 5  (understanding async await)

// const promiseFive=new Promise(function (resolve,reject) {
//     setInterval(function(){
//         let error=true
//         if(!error){
//             resolve({userName:"jomin",password:"123"})
//         }else{
//             reject(error)
//         }
//     },1000)
// })

// async function consumePromiseFive() {
//    try {
//     const response=await promiseFive
//     console.log(response)
//    } catch (error) {
//     console.log(error);
//    }
// }

// consumePromiseFive()


//async function using try and catch method 
// async function getAllUsers(){
//     try {
//         const response=await fetch("https://jsonplaceholder.typicode.com/users")
        
//         const data= await response.json()
//         console.log(data);

//     } catch (error) {
//         console.log("you got error")
//     }
// }

// getAllUsers()


//directly using fetch and then and catch method
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
console.log(data)
})
.catch((error)=>{
console.log("something went wrong")
})