const myObject={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in object) {
    
}

// for (const key in myObject) {
//     console.log(`${key} shortcut for ${myObject[key]}`);
//     }

//one more example 
const programming =["js","html","c++","python"]

// for(const key in programming){
//     console.log(`key:- ${key} and the value :- ${programming[key]}`);
// }



//Maps
const map=new Map()
map.set("IN","India")
map.set("Ch","China")
map.set("Fr","France")
map.set("Ch","China")

for (const [key] in map) {
    console.log(key);
}
//will get error , you cannot use for in method on map function , but can use for of emethod

