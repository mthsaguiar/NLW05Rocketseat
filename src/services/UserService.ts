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
        const userExists =  await this.findByEmail(email);

        //Caso não, salvar no banco
        if(!userExists){
            const user = await this.userRepository.create({
                email
            });
            await this.userRepository.save(user);

            return user;
        }

        await this.userRepository.save(userExists);

        return userExists;

    }

    async findByEmail(email){
        const userAlreadyExists = await this.userRepository.findOne({
            email
        });
        if(userAlreadyExists){
        //Caso exista, retornar o usuário
            return userAlreadyExists;
        }else{
            return;
        }
    }
}

export { UserService }

