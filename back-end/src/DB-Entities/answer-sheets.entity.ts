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

@Entity("Answer-sheets")
export class AnswersheetEntity {
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
    @ManyToOne(() => FormEntity, (From) => From.answersheet)
    form!: FormEntity;
    @ManyToOne(() => UserEntity, (User) => User.answersheet)
    user!: UserEntity;
}
