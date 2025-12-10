const promiseOne= new Promise(function(resolve,reject){
    //Do an asynk task
    //DB calls
    setTimeout(function(){
        console.log('Asynk task completed');
        resolve();
    },1000)
})
promiseOne.then(function(){
    console.log('Promise consumed');
    
})

// or
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asynk task 2");
        resolve();
    },1000)
}).then(function(){
    console.log('Asynk 2 resolve');
})
// ---------------------------------
const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "HI", email: "Hi@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})
// --------------------------------------
const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true;
        if(!error){
            resolve({username:"Hi",email: "Hi@gmail.com"})
        }else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
})
// ---------------------------Asynk Function()
async function name() {
    try {
        const response=await fetch('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json')
        const data = await response.json() //Here await is used for waiting 
        console.log(data);
    } catch (error) {
        console.log("E",error);
    }
}
name()


// Fetch()=> it start fetching a resource from network and give us a promise which is fulfilled once its available.
// let file = "fetch_info.txt"
// fetch (file)
// .then(x => x.text())
// .then(y => document.getElementById("demo").innerHTML = y);
