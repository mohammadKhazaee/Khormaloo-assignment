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
import { AnswersheetEntity } from "./answer-sheets.entity";
import { FieldEntity } from "./Field.entity";

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

    @ManyToOne(() => UserEntity, (User) => User.form)
    user!: UserEntity;
    @OneToMany(() => AnswersheetEntity, (Answersheet) => Answersheet.form)
    answersheet!: AnswersheetEntity;
    @OneToMany(() => FieldEntity, (FieldEntity) => FieldEntity.form)
    field!: FieldEntity;
}
