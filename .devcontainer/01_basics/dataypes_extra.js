/* Datas are categories into 2
1. primitive
2. non-primitive /reference type

primitive data type
there are total 7 type 
1. string
2. number
3. boolean
4. null 
5.undefined
6. Symbol :- this is used when you want to make any value unique,BigInt 

non-primitive/reference
1.arrays
2. objects
3. functions


note:-
js is a dynamically typed language


Non-primitive Datatypes return type
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/


//use of Symbol
// const id=Symbol("123")
// const anotherId=Symbol("123")
// console.log(id===anotherId);

//array
const heroes=["jofin","jomin","johnson"];

const myObj={
    name:"jofin",
    age:23,
    id:191007.12

}

const myFunction =function(){
    console.log("hello World");
}