import {getCustomRepository} from "typeorm";
import {IUserRepository} from "@src/database/repositories/interface/IUserRepository";
import {UserRepository} from "@src/database/repositories/typeorm/UserRepository";

//
// export const getRepository = () => {
//     return getRepo(User)
// }

/**
 *  Resolving UserRepositoryInterface
 *
 * @return IUserRepository
 */
export const getUserRepository = (): IUserRepository => {
    // const connection: Connection = await createConnection();
    //todo:: switch concrete repository based on config
    return getCustomRepository(UserRepository)
}
