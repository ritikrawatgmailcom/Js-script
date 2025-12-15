# Js-script
// Note;- typeof give type of variable
.trim(), .split()=>method
/*Prefer not to use var because of issue in block scope and functional scope*/

Array=> push, pop, includes,join, splice, slice, 
concat=> help to join two array
flat=> ye array ko join krke flat kr dega

const obj1={1:'a',2:'b',3:'c'}
const obj2={1:'A',2:'B',3:'C'}
const obj3={...obj1,...obj2} // it is used to combine both objects

// Object.freeze(user)            //Freeze use krne se ye freeze ho gya now no one can change any value here
// Immediately invoked Function Expression(IIFE)
(function hi(){
    console.log(`DB Connected`);
    
})();
// iife-> function that execute immediatly is called iife.
// to avaoid global scope pollution we used iife.
