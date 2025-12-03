// Immediately invoked Function Expression(IIFE)

// function hi(){
//     console.log(`DB Connected`);
    
// }
// hi()
// or----------------- note:- we can used this approach in iife or at the time of DB Connected.
(function hi(){
    console.log(`DB Connected`);
    
})();
// iife-> function that execute immediatly is called iife.
// to avaoid global scope pollution we used iife.

// (()=>{
//     console.log(`DB Connected two`);
// })()



