import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { AnswersEntity } from "./asnwers.entity";
import { FormEntity } from "./form.entity";
import { UserEntity } from "./user.entity";

@Entity("answer_sheets")
export class AnswerSheetEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @OneToMany(
        () => AnswersEntity,
        (AnswersEntity) => AnswersEntity.answerSheet
    )
    answers!: AnswersEntity[];

    @Column()
    formId!: number;

    @ManyToOne(() => FormEntity, (From) => From.answerSheets)
    form?: FormEntity;

    @Column()
    responderId!: string;

    @ManyToOne(() => UserEntity, (User) => User.answerSheets)
    @JoinColumn({ name: "responderId" })
    user?: UserEntity;
}
