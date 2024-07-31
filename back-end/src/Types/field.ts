import { string } from "zod";

export type FieldType = "Text" | "Checkbox" | "Select" | "Radio";

export interface FieldValue {
    content?: string;
    options?: CheckboxOption[] | RadioOption[];
}
export type CheckboxOption = { content: string; value: string };
export type RadioOption = { content: string; value: string; for: string };

