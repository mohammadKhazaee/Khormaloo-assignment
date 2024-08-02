import { string } from "zod";
import { Form } from "./form";
import { Answer } from "./answer";

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
    answers: Answer[]
}

export type checkboxOption = { content: string; value: string };
export type radioOption = { content: string; value: string; for: string };