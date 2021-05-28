import {userRepo} from "@src/providers/DatabaseProvidor";
import {IUser} from "@src/imodels/IUser";
import {IRegisterRequest} from "@src/request/irequest/IRegisterRequest";

export const register = async (userData: IRegisterRequest): Promise<IUser> => {
    delete userData.passwordConfirmation;
    return userRepo().create(userData)
}
