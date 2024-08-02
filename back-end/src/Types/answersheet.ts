import { Answer } from "./answer";
import { Form } from "./form";
import { User } from "./user";

export interface Answersheet {
    id: number,
    answers: Answer[],
    forms: Form[],
    users: User[]
}