import { Awnsersheet } from "./awnsersheet";
import { FieldValue } from "./field";

export interface Awnser {
    id: number,
    value: FieldValue,
    fields: FieldValue[],
    answersheets: Awnsersheet[]
}