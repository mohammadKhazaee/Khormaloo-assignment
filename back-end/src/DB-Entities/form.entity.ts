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
import { answersheetEntity } from "./answer-sheet.entity";
import { fieldEntity } from "./Field.entity";

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
    users!: UserEntity;
    @OneToMany(() => answersheetEntity, (answersheet) => answersheet)
    answersheets!: answersheetEntity;
    @OneToMany(() => fieldEntity, (fieldEntity) => fieldEntity)
    fields!: fieldEntity;
}
