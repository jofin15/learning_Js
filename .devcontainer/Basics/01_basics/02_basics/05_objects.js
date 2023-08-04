//object de-structure and json api

const courses={
    courseName:"javascript",
    price:999,
    courseInstructor:["jofin","jomin"]
}

//if you want to use another name for an element in an object use ":", as mentioned below.
const {courseName,courseInstructor:instructor}=courses;
console.log(`the course that you opt for ${courses.courseName} and your alloted instructors are ${instructor[0]} and ${instructor[1]}`);


//how json looks like (in the form of objects)
// {
//     "courseName":"javascript",
//     "price":999,
//     "courseInstructor":["jofin","jomin"]
// }

//or (in the form of array)

// [
//     {

//     },{

//     },{

//     }
// ]

//vs 

//how objects look like

// const courses={
//     courseName:"javascript",
//     price:999,
//     courseInstructor:["jofin","jomin"]
// }


//how fetching of api work
//fetch api request -> you will get data in the form of json -> convert that into objects -> and destruct the required keys value
