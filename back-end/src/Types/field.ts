import { string } from "zod";
<<<<<<< HEAD

export type FieldType = "Text" | "Checkbox" | "Select" | "Radio";

export interface FieldValue {
    content?: string;
    options?: CheckboxOption[] | RadioOption[];
}
export type CheckboxOption = { content: string; value: string };
export type RadioOption = { content: string; value: string; for: string };

=======
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
>>>>>>> feature/no-ref/add-types-and-getbyid-function
