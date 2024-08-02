import { FieldEntity } from "../DB-Entities/Field.entity"
import { Answersheet } from "./answersheet"
import { FieldValue } from "./field"
import { User } from "./user"

export interface Form {
    id: number,
    title: string,
    description: string,
    is_published: boolean
    users: User[]
    awnserSheets: Answersheet[]
    fields: FieldEntity[]


}