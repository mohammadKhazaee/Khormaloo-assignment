import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { FieldValue } from "../Types/field";
import { FieldEntity } from "./Field.entity";
import { AnswersheetEntity } from "./answer-sheets.entity";
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
        () => AnswersheetEntity,
        (AnswersheetEntity) => AnswersheetEntity.answers
    )
    answersheet!: AnswersEntity;
}
