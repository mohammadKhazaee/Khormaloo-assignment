import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { AnswersEntity } from "./asnwers.entity";
import { FormEntity } from "./form.entity";
import { UserEntity } from "./user.entity";

@Entity("answer-sheet")
export class AnswerSheetEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    createdAt!: Date;
    @Column()
    updatedAt!: Date;
    @OneToMany(() => AnswersEntity, (answersEntity) => answersEntity)
    answers!: AnswersEntity[];
    @ManyToOne(() => FormEntity, (from) => from)
    forms!: FormEntity[];
    @ManyToOne(() => UserEntity, (user) => user)
    users!: UserEntity[];
}
