import { Column, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { FieldType } from "../Types/field";
import { UserEntity } from "./user.entity";
import { answerEntity } from "./answers.entity";
import { listFiles } from "dotenv-flow";

@Entity("questions")
export class questionEntity {
    @PrimaryGeneratedColumn()
    id !:number ;

    @Column()
    title !: string ;
    @Column()
    type !: FieldType ;
    @Column({type :'json'})
    value !: 


    @ManyToMany (()=>UserEntity,(UserEntity)=> UserEntity.id)
    question !: UserEntity
    @OneToOne(()=>answerEntity,(answerEntity)=>answerEntity.id)
    question !: answerEntity
}