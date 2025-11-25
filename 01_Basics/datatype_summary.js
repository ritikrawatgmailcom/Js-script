// Primitive
// 7 types =>String, Number, Boolean, null, undefined, Symbol, BigInt
// const score =100
// const newscore=100.3
// const isLoggedIn=false
// const outside=null
// let a;
// const id=Symbol('123')
// const id1=Symbol('123')
// console.log(id==id1);//i.e. ki dono symbol main same value nhi h 


// Non Primitive 
// Array, Objects, Functions

//-----------------------------------------
// Stack(Primitive) , Heap(Non-Primitive)

let mychannel= "Hi"
let anotherChannel=mychannel
anotherChannel="hlo"
console.log(mychannel);
console.log(anotherChannel);

// here in stack we have gives object1 copy to obj2. So if we change obj2 it not affect the value of obj1

let user1={
    email:"ritik@gmail.com",
    upi:"1212@"
}
let user2=user1
user2.email="rawat@gmail.com"

console.log(user1);
console.log(user2);

// here we have given reference so when we change value of user2 then it change original value