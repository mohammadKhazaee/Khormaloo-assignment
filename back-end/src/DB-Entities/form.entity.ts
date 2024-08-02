import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { UserEntity } from "./user.entity";
<<<<<<< HEAD
import { AnswerSheetEntity } from "./answer-sheets.entity";
import { FieldEntity } from "./Field.entity";
=======
import { AnswerSheetEntity } from "./answer-sheet.entity";
import { FieldEntity } from "./Field.entity";
import { Field } from "../Types/field";
>>>>>>> feature/no-ref/add-types-and-getbyid-function

@Entity("forms")
export class FormEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;
    @Column()
    description!: string;
    @Column()
    is_published!: boolean;
    @CreateDateColumn()
    createdAt!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;

<<<<<<< HEAD
    @ManyToOne(() => UserEntity, (User) => User.forms)
    user!: UserEntity;
    @OneToMany(() => AnswerSheetEntity, (Answersheet) => Answersheet.form)
    answersheets!: AnswerSheetEntity[];
    @OneToMany(() => FieldEntity, (FieldEntity) => FieldEntity.form)
=======
    @ManyToOne(() => UserEntity, (user) => user)
    users!: UserEntity[];
    @OneToMany(() => AnswerSheetEntity, (answersheet) => answersheet)
    awnserSheets!: AnswerSheetEntity[];
    @OneToMany(() => FieldEntity, (fieldEntity) => fieldEntity)
>>>>>>> feature/no-ref/add-types-and-getbyid-function
    fields!: FieldEntity[];
}
