import { Answersheet } from "./answersheet";
import { Field, FieldValue } from "./field";

export interface Answer {
    id: number,
    value: FieldValue,
    fields: Field[],
    answersheets: Answersheet[]
}