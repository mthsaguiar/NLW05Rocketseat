import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository"



class UserService {

    private userRepository: Repository<User>

    constructor(){
        this.userRepository = getCustomRepository(UserRepository)
    }

    async create(email: string){

        //Verificar se o usuário existe,
        const userAlreadyExists = await this.userRepository.findOne({
            email
        });
        if(userAlreadyExists){
        //Caso exista, retornar o usuário
            return userAlreadyExists;
        }

        //Caso não, salvar no banco
        const user = this.userRepository.create({
            email
        });

        await this.userRepository.save(user);

        return user;

    }
}

export { UserService }

