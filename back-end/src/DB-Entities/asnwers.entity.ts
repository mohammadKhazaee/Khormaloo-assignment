import {
    Column,
    Entity,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { FieldValue } from "../Types/field";
import { fieldEntity } from "./Field.entity";
import { answersheetEntity } from "./answer-sheet.entity";
@Entity("answers")
export class answersEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column({ type: "json" })
    value!: FieldValue;
    @Column()
    createdAt!: Date;
    @Column()
    updatedAt!: Date;

    @OneToOne(() => fieldEntity, (fieldEntity) => fieldEntity)
    fields!: fieldEntity;
    @ManyToOne(() => answersheetEntity, (answersheetEntity) => answersEntity)
    answersheets!: answersEntity;
}
