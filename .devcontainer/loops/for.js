// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//        console.log(`inner loop ${j} and inner loop ${i}`); 
//     }
// }


// let mySuperHero=["batman","ironman","superman"]
// console.log(mySuperHero.length);
// for (let index = 0; index < mySuperHero.length; index++) {
//     const element = mySuperHero[index];
//     console.log(element);
    
// }


//break :- to break the control flow

for (let i = 1; i <= 10; i++) {
    if (i==5){
        console.log("5 detected");
        break;
    }
    const element = i;
    console.log(element);
}

//continue
for (let i = 1; i <= 10; i++) {
    if (i==5){
        console.log("5 detected");
        continue;
    }
    const element = i;
    console.log(element);
}