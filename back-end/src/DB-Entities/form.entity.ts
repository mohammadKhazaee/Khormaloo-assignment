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
import { AnswerSheetEntity } from "./answer-sheets.entity";
import { FieldEntity } from "./field.entity";

@Entity("Forms")
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

    @ManyToOne(() => UserEntity, (User) => User.forms)
    user!: UserEntity;
    @OneToMany(() => AnswerSheetEntity, (Answersheet) => Answersheet.form)
    answersheets!: AnswerSheetEntity[];
    @OneToMany(() => FieldEntity, (FieldEntity) => FieldEntity.form)
    fields!: FieldEntity[];
}
