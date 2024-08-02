import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { UserEntity } from "./user.entity";
import { AnswerSheetEntity } from "./answer-sheet.entity";
import { FieldEntity } from "./Field.entity";
import { Field } from "../Types/field";

@Entity("forms")
export class FormEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;
    @Column()
    description!: string;
    @Column()
    is_published!: boolean;
    @CreateDateColumn()
    createdAt!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;

    @ManyToOne(() => UserEntity, (user) => user)
    users!: UserEntity[];
    @OneToMany(() => AnswerSheetEntity, (answersheet) => answersheet)
    awnserSheets!: AnswerSheetEntity[];
    @OneToMany(() => FieldEntity, (fieldEntity) => fieldEntity)
    fields!: FieldEntity[];
}
