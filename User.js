class User{
    constructor(fullname,email,password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(){
        if(this.email == this.email && this.password == this.password){
            console.log(`${this.name}: login sucess!`)
        }else{
            console.log(`${this.fullname}: login failed`)
        }
    }
}

const jonh = new User(
    'Jonh',
    'neymarprime@gmail.com',
    '123456789'
)
