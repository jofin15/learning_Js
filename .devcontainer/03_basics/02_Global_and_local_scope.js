// let c=100 // even you cannot declare the value of c globally as well 

// c=100  //global variable 
//note:- this value will be overided by the local value of c

// let a =100; //block scope variable will not interfier with the global scope variable
// if (true){
//     let a=50;
//     const b=20;
//     var c=80;
//     console.log(`block scope value of a ${a}`);
// }
 
// console.log(a);  // you will get error . because value of a is within that if local scope .
// console.log(b); //same as above
// console.log(c); //you wont get error , value of c got leaked ourt from  that local scope. and thats we should never use var






//understanding scope in a nested function

function one(){ //parent function
    const name="jofin"; //it will act like a global variable for function two

    function two(){ //child function 
        const website="google" //here the value of the website is valid only inside this function scope 
        console.log(`hello ${name}`); //completely valid
    }
    // console.log(website); //will get an error

    two();
}

// one();



//understanding scope inside nested condition

if (true){
    const userName="jofin"

    if(userName==="jofin"){
        const age=" 23"
        console.log(userName+age);
    }
    // console.log(age); //error :- accessing the value outside the scope 
}
// console.log(userName); //same as above



//Quite important


//Method 1
// console.log(adddone(10)); //call the function from above or below , it will be get executed
// function adddone(num){
//     return num + 1;
// }
// console.log(adddone(10));


//Method 2

// adddone(5) //you cant call this function above the function definition
const adddone=function (num){
    return num+1
}
adddone(5) // function executed , no errors
