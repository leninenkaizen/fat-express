import {IUser} from "@src/imodels/IUser";

export interface IUserRepository {

    create(data: IUser): Promise<IUser>

    findByEmail(email: string): Promise<IUser | null>
}
