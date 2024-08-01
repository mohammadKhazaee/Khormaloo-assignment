import {
    Column,
    Entity,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { FieldValue } from "../Types/field";
import { FieldEntity as FieldEntity } from "./Field.entity";
import { AwnserSheetEntity } from "./answer-sheet.entity";
@Entity("answers")
export class AwnserEntity {
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
    @ManyToOne(() => AwnserSheetEntity, (answersheetEntity) => AwnserEntity)
    answersheets!: AwnserEntity[];
}
