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
import { questionEntity } from "./Questions";
import { answerEntity } from "./answers.entity";

@Entity("User")
export class UserEntity {
    @PrimaryColumn()
    id!: string;

    @Column()
    username!: string;

    @CreateDateColumn()
    createdAt!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;

    @OneToMany(() => FormEntity, (form) => form)
    forms!: FormEntity[];

    @OneToMany(() => answerEntity, (answer) => answer)
    answer!: answerEntity[];
}
