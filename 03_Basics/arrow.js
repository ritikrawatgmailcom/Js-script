const user={
    username:"Ritik",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},  welcome to website`);
    }
}
//this kya krta h => this cueernt context ko check krta h only
// user.welcomeMessage()
// user.username="sam";
// user.welcomeMessage()
// console.log(this);//here it give {} value
// ------------------------------------------------------------
//but hm ye agr browser main check krenge then we get window as value kyonki window is global object in browser
// we can't use this in function
// function hi(){
//     const name="Ritik"
//     console.log(this);
// }
// hi()

// ()=>{}  -->ye arrow function h

const add=(a,b)=>{
    console.log(a+b);
}
// add(3,5)

const add1=(a,b)=> {return a+b} 
add1(3,4)

const add2=(a,b)=> (a+b)
add2(4,5)

//Note :- If we use { } curly braket then we have to use return and if we dont use bracket then we can't use return 
























