import {
    Column,
    Entity,
    ManyToMany,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { FieldType, FieldValue } from "../Types/field";
import { listFiles } from "dotenv-flow";
import { FormEntity } from "./form.entity";
import { AnswerEntity } from "./asnwers.entity";

@Entity("Fields")
export class FieldEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    title!: string;
    @Column()
    type!: FieldType;
    @Column({ type: "json" })
    value!: FieldValue;
    @Column()
    createdAt!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;

    @ManyToOne(() => FormEntity, (form) => form)
    Forms!: FormEntity[];
    @OneToOne(() => AnswerEntity, (asnwers) => asnwers)
    awnsers!: AnswerEntity[];
}
