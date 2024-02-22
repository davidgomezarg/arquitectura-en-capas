import { CreateUserDTO, GetUserDTO} from "../dao/DTOs/users.dto.js";

export class UsersRepository{
    constructor(dao) {
        this.dao = dao
    }

    getUsers = async(res,req)=>{
        const users = await this.dao.get();
        return users;
    }

    getUserByID = async(id)=>{
        const user = await this.dao.getUserByID(id);
        return user;
    }

    createUser = (user)=>{
        const result = this.dao.createUser(user);
        return result;

    }

    delete =(id)=>{
        const result = this.dao.delete(id);
        return result;
    }

    // async createContact(contact){
    //     const contactDto = new CreateContactDTO(contact);
    //     const contactCreated = await this.dao.post(contactDto);
    //     const contactDtoFront = new GetContactoDTO(contactCreated);
    //     return contactDtoFront;
    // }
}