//Two ways you can declare and assign arrays

const myArr=[1,2,3,4,5]
const myArr2=new Array(2,4,5,6,8,9)
console.table([myArr,myArr2]);
console.log(myArr[3]);


//array methods
myArr.push(10)
console.log(myArr);
myArr.pop();
console.log(myArr);

myArr.unshift(69) //it adds the element at the beginning of the array 
console.log(myArr);

myArr.shift() //it pops that first element
console.log(myArr);

console.log(myArr.includes(3));
console.log(myArr.indexOf(3));

const newArra=myArr.join() //this converts the array into string and binds them 
console.log(myArr);
console.log(newArra);

console.log( typeof newArra);


//quite important 
//slice and splice oepration

//slice
const myA1=myArr.slice(1,3) //this will print the value of index 1 and index 2 (exclude index 0 and index 3) 
console.log("A ",myArr);
console.log(myA1);

console.log("B ", myArr);

//splice
const myn2=myArr.splice(1,3) //it not only printed value including  index 3 but also removed index 0 and index 4 from the main array  
console.log(myn2);

//change in main array
console.log("C ",myArr);
