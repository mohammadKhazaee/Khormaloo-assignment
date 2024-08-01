import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { FieldType, FieldValue } from "../Types/field";
import { FormEntity } from "./form.entity";

@Entity("fields")
export class FieldEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    title!: string;
    @Column()
    name!: string;
    @Column()
    required!: boolean;
    @Column()
    type!: FieldType;
    @Column({ type: "json" })
    options!: FieldValue;
    @Column()
    createdAt!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;

    @ManyToOne(() => FormEntity, (Form) => Form.fields)
    form!: FormEntity;
}
