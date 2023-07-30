const user={
    username:"jofin",
    price:999,

    welcomeMessage:function(){
        //This is used to refer the current context. Any value which is inside that object can be accessed using "this" keyword
        // console.log(`${this.username},welcome `);
        // console.log(this); // it will print the current context of the object
    }
}

user.username="jomin"
user.welcomeMessage()
// console.log(this); // it will print empty object. Because outside it does not have any context . But if you print this in the browser , you will get window object as an output because that is the default global object of the browser
    



//Note:-
// function chai(){
//     let username="jofin"
//     console.log(this.username); //will get an error that means this only worKs on the object not on the fuynction

// }
// chai()


//using arrow function 

//this is also called explicit return 
// const chai=()=>{
//     let username="jofin"
//     console.log(this); // the only difference is that if you log "this" keyword, the result will comprises of a ton of methods and properties. But if you console log "this" keyword on the arrow function you will not get such result only empty object. 
// }
// chai();


//implicit return 
// const addTwo =(num1,num2)=>num1+num2
//or
// const addTwo2 =(num1,num2)=>(num1+num2)


// console.log(addTwo(2,4));
// console.log(addTwo2(4,8));

//note :- if you use {} then you have to mention return , but if you use () then you dont have to mention return keyword

//explicit return :- you need to mention return keyword
//implicit return :- you need not to mention return keyword


const addTwo =(num1,num2)=>({username:"jofin"})
console.log(addTwo(2,4));
