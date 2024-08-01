import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { AwnserEntity } from "./asnwers.entity";
import { FormEntity } from "./form.entity";
import { UserEntity } from "./user.entity";

@Entity("answer-sheet")
export class AwnserSheetEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    createdAt!: Date;
    @Column()
    updatedAt!: Date;
    @OneToMany(() => AwnserEntity, (answersEntity) => answersEntity)
    awnsers!: AwnserEntity[];
    @ManyToOne(() => FormEntity, (from) => from)
    forms!: FormEntity[];
    @ManyToOne(() => UserEntity, (user) => user)
    users!: UserEntity[];
}
