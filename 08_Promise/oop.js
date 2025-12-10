// const user={
//     username:"Ritik",
//     loginCount:8,
//     signedIn:true,

//     getUserDetails:function(){
//         // console.log(this.username); //--> this word refer to the object ki iska btao.
//         console.log(this);
        
//     }
// }

// console.log(user.getUserDetails());

// -------------------------------

function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    return this
}
const UserOne=new User("ri",8,true)
const UserTwo=new User("Ra",10,false)
console.log(UserOne);
console.log(UserTwo);


 




