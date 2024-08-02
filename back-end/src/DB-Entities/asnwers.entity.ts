import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { FieldValue } from "../Types/field";
import { AnswerSheetEntity } from "./answer-sheets.entity";
import { FieldEntity } from "./Field.entity";

@Entity("answers")
export class AnswersEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "json" })
    value!: FieldValue;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @Column()
    fieldId!: number;

    @OneToOne(() => FieldEntity)
    @JoinColumn({ name: "fieldId" })
    field?: FieldEntity;

    @Column()
    answerSheetId!: number;

    @ManyToOne(
        () => AnswerSheetEntity,
        (AnswersheetEntity) => AnswersheetEntity.answers
    )
    answerSheet?: AnswersEntity;
}
