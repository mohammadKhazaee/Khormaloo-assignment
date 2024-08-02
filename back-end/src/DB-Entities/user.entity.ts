import {
<<<<<<< HEAD
    CreateDateColumn,
    Entity,
=======
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
>>>>>>> feature/no-ref/add-types-and-getbyid-function
    OneToMany,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";
import { FormEntity } from "./form.entity";
<<<<<<< HEAD
import { AnswerSheetEntity } from "./answer-sheets.entity";

@Entity("users")
=======
import { AnswerSheetEntity } from "./answer-sheet.entity";

@Entity("User")
>>>>>>> feature/no-ref/add-types-and-getbyid-function
export class UserEntity {
    @PrimaryColumn()
    username!: string;

    @CreateDateColumn()
    createdAt!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;

<<<<<<< HEAD
    @OneToMany(() => FormEntity, (Form) => Form.user)
    forms!: FormEntity[];

    @OneToMany(() => AnswerSheetEntity, (Answersheet) => Answersheet.user)
    answersheets!: AnswerSheetEntity[];
=======
    @OneToMany(() => FormEntity, (form) => form)
    forms!: FormEntity[];

    @OneToMany(() => AnswerSheetEntity, (answersheet) => answersheet)
    awnserSheets!: AnswerSheetEntity[];
>>>>>>> feature/no-ref/add-types-and-getbyid-function
}
