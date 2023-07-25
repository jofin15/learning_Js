// //Number

// const score=400;
// console.log(score);

// //by writing in this way, it gives you a lot of other features,same with the "new String" 
// const balance=new Number(100)
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toString().length);

// //quite important
// console.log(balance.toFixed(4));

// const otherNumber=23.8952
// console.log(otherNumber.toPrecision(3));

// const hundreds=10000000
// console.log(hundreds.toLocaleString('en-IN'));





///Maths

console.log(Math);

//absolute:- make negative into possitive
// console.log(Math.abs(-40));

// console.log(Math.round(4.89));
// console.log(Math.ceil(4.89));
// console.log(Math.floor(4.89));
// console.log(Math.sqrt(16));
// console.log(Math.min(16,75,21,10));
// console.log(Math.max(16,20,17,22,18));


//if you want random number betwwen range 1 to 9
// console.log(Math.random()*10);
// const randomNumber=(Math.random()*10)+1
// console.log(Math.floor(randomNumber));


//if you want random number between range max and min , which will be given 

const max=20
const min=10

console.log(Math.floor(Math.random()*(max-min+1))+min);