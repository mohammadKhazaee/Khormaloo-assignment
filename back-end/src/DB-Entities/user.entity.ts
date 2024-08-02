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
import { AnswerSheetEntity } from "./answer-sheet.entity";

@Entity("User")
export class UserEntity {
    @PrimaryColumn()
    username!: string;

    @CreateDateColumn()
    createdAt!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;

    @OneToMany(() => FormEntity, (form) => form)
    forms!: FormEntity[];

    @OneToMany(() => AnswerSheetEntity, (answersheet) => answersheet)
    awnserSheets!: AnswerSheetEntity[];
}
