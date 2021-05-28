import {userRepo} from "@src/providers/DatabaseProvidor";
import {throwValidationError} from "@src/validator/validator";



export const isUserEmailUnique = async (value: string) => {
    if (await userRepo().findByEmail(value)) {
        throwValidationError(`email: ${value} has been taken`)
    }
};


export const isPasswordConfirmed = async (value: string, {req} : any) => {
    if (value !== req.body.password) {
        throw new Error('Password confirmation does not match password');
    }
    return  true;
};
