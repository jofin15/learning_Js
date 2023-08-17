//old syntax for inheritance
// const User={
//     name:"chai",
//     email:"jof@gmail.com"
// }

// const Teacher={
//     makeVideo:true,
//     isAvailable:true
// }

// const TeachingSupport={
//     isAvailable:false
// }

// const TASupport={
//     makeAssignment:"Js Assignment ",
//     fullTime:true,

//     //if i want to add all the properties from TeachinngSupport simply add (inheritance)
//     __proto__:TeachingSupport
// }

// //or 
// Teacher.__proto__=User


//Modern Syntax
// const newObject=Object.setPrototypeOf(TeachingSupport,Teacher)
// console.log(newObject);