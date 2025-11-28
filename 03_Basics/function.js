function add(a,b){
    console.log (a+b);
}
// add(3,4)
// const result=add(3,4)
// console.log(result);

// function addition(a,b){
//     return(a+b);
// }
// const result=addition(3,4)
// console.log("Result:",result);  //jb tk return word nhi likhenge bo nhi return krega result main


function cal(num1){
    return num1
}
// console.log(cal(200));
// console.log(cal(200,400)); // nowit not return whole value

function calculate(...num){
    return num
}
// console.log(calculate(200,400,800));  // Note so when we use (...) it return value whole


const user={
    name:"Ritik Rawat",
    prices:199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and prices is ${anyObject.prices}`);
}
// handleObject(user)
// handleObject({name:"sam",prices:100}) //we can use both method either enter all in method or in object.




