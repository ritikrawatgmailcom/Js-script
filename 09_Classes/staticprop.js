class User {
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
    static createId(){
        return '123'
    }
    // Note:- Static word lgan ese ue koi access nhi kr payega 
    // createId(){
    //     return '123'
    // }
}
const ritik= new User("Ritik")
console.log(ritik.createId());

