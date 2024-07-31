import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { answersEntity } from "./asnwers.entity";
import { FormEntity } from "./form.entity";
import { from } from "form-data";
import { UserEntity } from "./user.entity";

@Entity("answer-sheet")
export class answersheetEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    createdAt!: Date;
    @Column()
    updatedAt!: Date;
    @OneToMany(() => answersEntity, (answersEntity) => answersEntity)
    answers!: answersEntity;
    @ManyToOne(() => FormEntity, (from) => from)
    forms!: FormEntity;
    @ManyToOne(() => UserEntity, (user) => user)
    users!: UserEntity;
}
