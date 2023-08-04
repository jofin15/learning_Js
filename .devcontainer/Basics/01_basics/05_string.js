// const name="jofi"
// const age=20
// console.log(name+age); //note:- we are not going to use this method anymore

// console.log(`my name is ${name} and my age is ${age} `); //we usually prefer this time of method to display the output 

const gameName=new String("jofin-johnson")
// console.log(gameName.slice(0,2));
// console.log(gameName[2]);
// console.log(gameName.toUpperCase());
// console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("i"));

// const newString = gameName.substring(1,3)
// console.log(newString);

// const anotherString =gameName.slice(1,3);
// console.log(anotherString);


//quite important (trim ,slice and replace)
const newStringOne="   jofin "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://jofin.com/jofin%20johnson"

console.log(url.replace("%20","-"))
console.log(url.includes("mini"))
console.log(gameName.split("-"));