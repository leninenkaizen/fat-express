import {
    Entity,
    PrimaryGeneratedColumn,
    Column, BaseEntity
} from "typeorm";
import {IUser} from "@src/imodels/IUser";

@Entity({name: 'users'})
export class User implements IUser {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;
}
