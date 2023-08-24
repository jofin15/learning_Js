// if statement 

//use of  == vs ===

// if (2=="2"){ // using dounble equal, there is no typechecking
//     console.log("executed");
// }
// if (2==="2"){ //using triple equal, type checking might be consider
//     console.log("executed second one ");

// }


//never write implicit if statement 
// let balance=100
// if(balance<500)console.log("ue"),console.log("asdf");



//quite important
const userLoggedIn=true;
const debitCard=true;
const loginFromGoogle=true;
const loginFromFacebook=false;

//in AND operator even if one of the variable  is false ,the statement will never get executed
if(userLoggedIn && debitCard & 2!=2){
    console.log("executed");
}

//in OR operator if any of the variable is true, the whole statement will get executed
if (loginFromGoogle || loginFromFacebook){
    console.log("executed 2");
}  