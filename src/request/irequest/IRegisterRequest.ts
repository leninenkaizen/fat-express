import {IUser} from "@src/imodels/IUser";

export interface IRegisterRequest extends IUser {
    passwordConfirmation?: string
}
