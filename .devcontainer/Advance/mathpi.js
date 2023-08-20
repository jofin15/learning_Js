const descriptor=Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor);
//the above object cannot be changed ,nor writable,enumerable and neither be configured


const chai={
    name:"ginger tea",
    price:250,
    isAvailable:true
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
