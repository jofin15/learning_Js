// const coding=["js","python","java"]

//method 1
// coding.forEach(function (code){
//     console.log(code);
// })

//method 2
// coding.forEach((item)=>{
// console.log(item);
// })

//method 3
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe) //here we are refering the function by calling the function name , not executing it by adding ()




// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })




// const myCoding=[
//     {
//         name:"jofin",
//         age:23
//     },
//     {
//         name:"jomin",
//         age:18
//     },
//     {
//         name:"johnson",
//         age:54
//     }
// ]

// myCoding.forEach((item)=>{
// console.log(item.name);
// console.log(item.age);
// })


// const coding=["js","python","java"]

// const values=coding.forEach( (item)=>{
//     return item ;

// })
// console.log(values); //output is undefined , that means foreach function does not return anything

