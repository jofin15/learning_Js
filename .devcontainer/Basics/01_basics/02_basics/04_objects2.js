//Declaration of objects using 

//Using singleton
const tinderUser=new Object()
console.log(tinderUser);

//or Object literals
const tinderUser2={

}
console.log(tinderUser2);
//both declaration are same 




//assigning value for the elements in the object
tinderUser.id="456bdas"
tinderUser.name="jomin"
tinderUser.isLoggedIn=true

// console.log(tinderUser);

tinderUser2.id="123abc"
tinderUser2.name="jofin"
tinderUser2.isLoggedIn=false

// console.log(tinderUser2);



//nested object declaration
// const newObject={
//     user1:{
//         fullname:{
//             firstName:"jofin",
//             lastName:"johnson"
//         },
//         age:23,
//         courses:["maths","physics","chemistry","biology"]
//     },
//     user2:{
//         fullname:{
//             firstName:"jomin",
//             lastName:"johnson"
//         },
//         age:18,
//         courses:["maths","physics","it"]
//     }
// }

//accessing nested object
// console.log(newObject.user1.fullname.lastName);
// console.log(newObject.user2.courses[1]);


//to merge two objects 
//  const userA={1:"a",2:"b"}
//  const userB={3:"c",4:"d"}

//  const returUser=Object.assign({},userA,userB);   //{}=>target,rest=>source . that means all the merge source ,put that in the {} which is a target (target,source)
//  console.log(returUser);

//But the best alternative is using spread operator for merging two objects
// const userC={...userA,...userB}
// console.log(userC); 






//quite important topic

//How data looks like in database

const data=[
    {
        userA:{
            userName:{
                firstName:"jofin",
                lastName:"johnson"
            },
            age:23,
            course:["maths","physics","chemistry"]
        },
        pidNo:191007


    },{
        userB:{
            userName:{
                firstName:"jomin",
                lastName:"johnson"
            },
            age:18,
            course:["Biology","physics","Maths"]
        },
        pidNo:191009

    }
]

console.log(data[0].userA.course[2]);
console.log(data[1].userB.userName.firstName);

console.log(Object.keys(tinderUser2)); //it will return all the keys of that object in the form of array  

console.log(Object.values(tinderUser2)); //it will return all the values of that key of an object in the form of array  

console.log(Object.entries(tinderUser2)); //it will return all the key value pair in a seperate array within a array

