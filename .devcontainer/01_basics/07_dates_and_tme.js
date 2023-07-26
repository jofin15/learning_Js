//Dates

// let myDate=new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toString());

// console.log(typeof myDate);

//if you want to declare your own date
// let myCreatedDate=new Date(2023,5,7);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate2=new Date(2023,5,7,10,30);
// console.log(myCreatedDate2.toLocaleString());

// let myCreatedDate2=new Date("12-13-2023");
// console.log(myCreatedDate2.toLocaleString());

// let myTimeStamp= Date.now();

// console.log(myTimeStamp); //the values will be in milliseconds
// console.log(myCreatedDate2.getTime());


//if we need to convert milliseconds into seconds
// console.log(Math.floor(Date.now()));

//some more properties which can be used by newDate object
let newDate=new Date();
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getHours());
// console.log(newDate.getFullYear());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());


//quite important
newDate.toLocaleString("default",{
    weekday:"long"
})