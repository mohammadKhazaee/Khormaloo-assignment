import {
    Column,
    Entity,
<<<<<<< HEAD
    JoinColumn,
=======
>>>>>>> feature/no-ref/add-types-and-getbyid-function
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { FieldValue } from "../Types/field";
<<<<<<< HEAD
import { AnswerSheetEntity } from "./answer-sheets.entity";
import { FieldEntity } from "./Field.entity";

@Entity("answers")
export class AnswersEntity {
=======
import { FieldEntity as FieldEntity } from "./Field.entity";
import { AnswerSheetEntity } from "./answer-sheet.entity";
@Entity("answers")
export class AnswerEntity {
>>>>>>> feature/no-ref/add-types-and-getbyid-function
    @PrimaryGeneratedColumn()
    id!: number;
    @Column({ type: "json" })
    value!: FieldValue;
    @Column()
    createdAt!: Date;
    @Column()
    updatedAt!: Date;

<<<<<<< HEAD
    @OneToOne(() => FieldEntity)
    @JoinColumn()
    field!: FieldEntity;
    @ManyToOne(
        () => AnswerSheetEntity,
        (AnswersheetEntity) => AnswersheetEntity.answers
    )
    answersheet!: AnswersEntity;
=======
    @OneToOne(() => FieldEntity, (fieldEntity) => fieldEntity)
    fields!: FieldEntity[];
    @ManyToOne(() => AnswerSheetEntity, (answersheetEntity) => AnswerEntity)
    answersheets!: AnswerSheetEntity[];
>>>>>>> feature/no-ref/add-types-and-getbyid-function
}
