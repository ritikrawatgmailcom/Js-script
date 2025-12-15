class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}
class Teacher extends User{
    constructor (username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new Course was added ${this.username}`);
    }
}
const chai= new Teacher("Ritik","r@gmail.com","123")
const MasalaChai= new User("MasalaChai")
chai.addCourse()
MasalaChai.logMe()
