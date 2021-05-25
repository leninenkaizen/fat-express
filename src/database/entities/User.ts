import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm";
import {IUser} from "@src/imodels/IUser";

@Entity()
export class User implements IUser {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;
}
