import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { UserEntity } from "./user.entity";
import { AnswerSheetEntity } from "./answer-sheets.entity";
import { FieldEntity } from "./Field.entity";

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

    @Column()
    creatorId!: string;

    @ManyToOne(() => UserEntity, (User) => User.forms)
    @JoinColumn({ name: "creatorId" })
    user?: UserEntity;

    @OneToMany(() => AnswerSheetEntity, (Answersheet) => Answersheet.form)
    answerSheets?: AnswerSheetEntity[];

    @OneToMany(() => FieldEntity, (FieldEntity) => FieldEntity.form)
    fields?: FieldEntity[];
}