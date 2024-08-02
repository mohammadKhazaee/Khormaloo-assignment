import {
    Column,
    Entity,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { FieldValue } from "../Types/field";
import { FieldEntity as FieldEntity } from "./Field.entity";
import { AnswerSheetEntity } from "./answer-sheet.entity";
@Entity("answers")
export class AnswerEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column({ type: "json" })
    value!: FieldValue;
    @Column()
    createdAt!: Date;
    @Column()
    updatedAt!: Date;

    @OneToOne(() => FieldEntity, (fieldEntity) => fieldEntity)
    fields!: FieldEntity[];
    @ManyToOne(() => AnswerSheetEntity, (answersheetEntity) => AnswerEntity)
    answersheets!: AnswerSheetEntity[];
}
