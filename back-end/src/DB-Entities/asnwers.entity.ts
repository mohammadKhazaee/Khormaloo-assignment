import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
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
    @Column()
    createdAt!: Date;
    @Column()
    updatedAt!: Date;

    @OneToOne(() => FieldEntity)
    @JoinColumn()
    field!: FieldEntity;
    @ManyToOne(
        () => AnswerSheetEntity,
        (AnswersheetEntity) => AnswersheetEntity.answers
    )
    answersheet!: AnswersEntity;
}
