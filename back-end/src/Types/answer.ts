import { Answersheet } from "./answersheet";
import { Field, FieldValue } from "./field";

export interface Answer {
    id: number,
    value: FieldValue,
    fieldId: number,
    field?: Field,
    answerSheetId: number;
    answersheets?: Answersheet
}
