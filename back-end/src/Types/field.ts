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
    value: string,
    required: boolean,
    type: FieldType,
    options: FieldValue,
    formId: number
    form?: Form
}

export type checkboxOption = { content: string; value: string };
export type radioOption = { content: string; value: string; for: string };
