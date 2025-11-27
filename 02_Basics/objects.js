const mysym =Symbol("key1")
const user={
    name:"Ritik",
    "fullname":"Ritik Rawat",
    age:25,
    mysym:"key12",
    location:"Dabra",
    email:"ritik@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(user.email);
// console.log(user.fullname);
// console.log(typeof user.mysym);
// Object.freeze(user)            //Freeze use krne se ye freeze ho gya now no one can change any value here
user.email="rawat@gmail.com"
// console.log(user);

user.greeting=function(){
    console.log("Hello user");
}
user.greetingTwo=function(){
    console.log(`Hello user,${this.name}`);
}
user.greeting()
user.greetingTwo()



