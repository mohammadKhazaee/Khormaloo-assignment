import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    OneToMany,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";
import { FormEntity } from "./form.entity";
import { AnswerSheetEntity } from "./answer-sheets.entity";

@Entity("Users")
export class UserEntity {
    @PrimaryColumn()
    username!: string;

    @CreateDateColumn()
    createdAt!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;

    @OneToMany(() => FormEntity, (Form) => Form.user)
    forms!: FormEntity[];

    @OneToMany(() => AnswerSheetEntity, (Answersheet) => Answersheet.user)
    answersheets!: AnswerSheetEntity[];
}
