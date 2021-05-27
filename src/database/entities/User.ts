import {
    Entity,
    PrimaryGeneratedColumn,
    Column, BaseEntity
} from "typeorm";
import {IUser} from "@src/imodels/IUser";

@Entity({name: 'users'})
export class User extends BaseEntity implements IUser {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;
}
