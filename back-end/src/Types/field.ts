import { string } from "zod";
import { Form } from "./form";
import { Awnser } from "./awnser";

export type FieldType = "text" | "checkbox" | "select" | "radio";

export interface FieldValue {
    content?: string;
    options?: checkboxOption[] | radioOption[];
}

export interface Field {
    id: number,
    title: string,
    type: FieldType,
    value: FieldValue,
    forms: Form[]
    answers: Awnser[]
}

export type checkboxOption = { content: string; value: string };
export type radioOption = { content: string; value: string; for: string };