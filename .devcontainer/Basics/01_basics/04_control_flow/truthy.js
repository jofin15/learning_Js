// const email="jofinjomin15@gmail.com"
// const email=""
// const email=[]

// if(email){
// console.log("got email");
// }
// else{
//     console.log("Dont have user email");
// }



//falsy value
// false , 0 , -0, BigInt 0n, "",null , undefined, NaN 

// truthy value
//  "0", "asdf","false"," ",[],{}, function(){}

//for example
const emptyObj={}
// if(Object.keys(emptyObj).length===0){ //here it will return an empty object, so it will be true
//     console.log("object is empty");
// }

// if (emptyObj){ //truthy value
//     console.log("hello");
// }



//nullish coalescing operator (??):null undefined
let val1;
// val1=5??10; //first value will be get executed
// val1=null??15 //the value will be given the highest priority if not then null 
// val1=undefined??20
// val1=undefined??null // null is the output
val1=null ?? 10 ?? 15 // first value will be printed
console.log(val1);
//this is used for error handling , if a function fails to do its action or fails to return something , null will be assigned.


//note :-ternary operator and null coalescing operator are both different

//ternary operator
//condition ? true :false




