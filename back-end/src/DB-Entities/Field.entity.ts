import {
    Column,
    Entity,
    ManyToMany,
    ManyToOne,
    OneToOne,
    PessimisticLockTransactionRequiredError,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { FieldType, FieldValue } from "../Types/field";
import { listFiles } from "dotenv-flow";
import { FormEntity } from "./form.entity";
import { AnswersEntity } from "./asnwers.entity";

@Entity("Fields")
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

    @ManyToOne(() => FormEntity, (Form) => Form.field)
    form!: FormEntity;
    
}
