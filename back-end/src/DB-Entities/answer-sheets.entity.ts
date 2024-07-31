import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { AnswersEntity } from "./asnwers.entity";
import { FormEntity } from "./form.entity";
import { from } from "form-data";
import { UserEntity } from "./user.entity";

@Entity("Answer-Sheets")
export class AnswerSheetEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    createdAt!: Date;
    @Column()
    updatedAt!: Date;
    @OneToMany(
        () => AnswersEntity,
        (AnswersEntity) => AnswersEntity.answersheet
    )
    answers!: AnswersEntity[];
    @ManyToOne(() => FormEntity, (From) => From.answersheets)
    form!: FormEntity;
    @ManyToOne(() => UserEntity, (User) => User.answersheets)
    user!: UserEntity;
}