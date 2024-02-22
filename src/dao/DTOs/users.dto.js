export class CreateUserDTO{
    constructor(user){
        this.fullName = `${user.firts_name} ${user.last_name}`;
        this.name = user.firts_name;
        this.lastName = user.last_name;
        this.telefono = user.telefono;
        this.email = user.email;
        this.password = user.password;
    }
}

export class GetUserDTO{
    constructor(userDB){
        this.fullName = userDB.fullName;
        this.telefono = userDB.telefono;
        this.email = userDB.email
    }
}