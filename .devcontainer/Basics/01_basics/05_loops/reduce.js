const myNumber=[1,2,3,4,5]

// const myTotal=myNumber.reduce((acc,currval)=>{
//     console.log(`accumulator : ${acc} and current value: ${currval}`);
//     return acc+currval
// },2)

//or 

// const myTotal=myNumber.reduce((acc,currval)=>acc+currval,0)
// console.log(myTotal);



//example

const course=[
    {
        itemName:"java",
        price:1999
    },
    {
        itemName:"react",
        price:2999
    },
    {
        itemName:"python",
        price:3999
    }
]

const priceToPay=course.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);