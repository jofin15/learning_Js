const m1=["a","b","c"]
const m2=["d","e","f"]
// m1.push(m2) //you push m2 with m1 elements . not a right way to do 
// console.log(m1);

// newM=m1.concat(m2) //here you concate or merge all the elements in m2 with all the elements of m1

// console.log(newM);



//spread operator
const newM=[...m1,...m2] //better method compare to concate and push if you need to merge two arrays together
console.log(newM);


//flat method :- incase you have complex array where the array looks like this 
const anotherArray=[1,2,3,[4,5,6],7,[8,[9,0]]]
//and you want to make a new array which flat or make all element seperated then use flat method

const real_another_array=anotherArray.flat(Infinity);
console.log(real_another_array);

//check whether the given variable is an array or not
console.log(Array.isArray(real_another_array));

//convert anything into array
console.log(Array.from("JOFIN"));
console.log(Array.from({name:"jofin"})); 


//if you want to create an array out from a givem elements use "of" method

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
