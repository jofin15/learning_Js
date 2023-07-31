//iife :-   Immediately Invoked Function Expression 
//Also to avoid the getting your function local variable to get affected by the global variable 


(function connectDb(params) {
    console.log("DB connected");
})(); //never forget to put parathesis
//this function will self executed 


// use of iife on arrow function
((name)=>{
   console.log(`connect the database ${name}`); 
})("jofin");


//Note:-
//first ():- where we write the function defination
//second ():- where we execute that function

