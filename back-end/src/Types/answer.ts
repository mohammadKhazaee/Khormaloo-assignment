import { Answersheet } from "./answersheet";
import { FieldValue } from "./field";

export interface Answer {
    id: number,
    value: FieldValue,
    fields: FieldValue[],
    answersheets: Answersheet[]
}