import {userRepo} from "@src/providers/DatabaseProvidor";
import {Request} from "express";


export const isUserEmailUnique = async (value: string) => {
    if (await userRepo().findByEmail(value)) {
        throw new Error(`email: ${value} has been taken`);
    }
    return  true;
};


export const isPasswordConfirmed = async (value: string, {req} : any) => {
    if (value !== req.body.password) {
        throw new Error('Password confirmation does not match password');
    }
    return  true;
};
