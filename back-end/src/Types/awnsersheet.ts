import { Awnser } from "./awnser";
import { Form } from "./form";
import { User } from "./user";

export interface Awnsersheet {
    id: number,
    awnsers: Awnser[],
    forms: Form[],
    users: User[]

}