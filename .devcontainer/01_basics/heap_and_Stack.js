/* 
All the data which are primitive will be saved in :- stack
All the data which are non-primitive will be saved in :- Heap
*/

// let user1="jofin"
// let user2=user1;
// user1="jmin"
// console.table([user1,user2])

let user1={
    name:"jofin",
    pid:191007
}
let user2=user1;
user2.name="jomin"
console.log(user2);


/*Note:-
Whenever you store anything on the stack you get the copy of that 
But Whenever you store anything on the heap you will get the reference of it 
*/