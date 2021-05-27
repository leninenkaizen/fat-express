import {IUserRepository} from "@src/database/repositories/interface/IUserRepository";
import {EntityManager, EntityRepository, Repository} from "typeorm";
import {User} from "@src/database/entities/User";
import {IUser} from "@src/imodels/IUser";

const model = User;

@EntityRepository()
export class UserRepository implements IUserRepository{

    constructor(private manager: EntityManager) {}

    /**
     * find user by email
     */
    async findByEmail(email: string): Promise<IUser | null> {
        const user = await this.manager.findOne( model, {email: email});
        return user ? user : null
    }

    /**
     * Creating new user
     */
    create(userData: IUser): Promise<IUser> {
        const user = new User();
        Object.assign(user, userData);

        return this.manager.save(user)
    }
}
