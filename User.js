class User{
    constructor(fullname,email,password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    publish(email, password) {
        if (this.email === email && this.password === password) {
            console.log(`${this.fullname}: Login successful!`);
        } else {
            console.log(`${this.fullname}: Login failed!`);
        }
    }
}

const jonh = new User(
    'Jonh',
    'neymarprime@gmail.com',
    '123456789'
)
jonh.publish('neymarprime@gmail.com', '123456789')