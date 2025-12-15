class User{
    constructor(username,email, password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}
const hi=new User("Ritik","r@gmail.com","123");

console.log(hi.encryptPassword());
console.log(hi.changeUserName());

