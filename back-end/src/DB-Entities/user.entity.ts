import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    OneToMany,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";
import { FormEntity } from "./form.entity";
import { AnswersheetEntity } from "./answer-sheets.entity";

@Entity("Users")
export class UserEntity {
    @PrimaryColumn()
    username!: string;

    @CreateDateColumn()
    createdAt!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;

    @OneToMany(() => FormEntity, (Form) => Form.user)
    form!: FormEntity[];

    @OneToMany(() => AnswersheetEntity, (Answersheet) => Answersheet.user)
    answersheet!: AnswersheetEntity[];
}
