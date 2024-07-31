import { string } from "zod";

export type FieldType = "text" | "checkbox" | "select" | "radio";

export interface FieldValue {
    content?: string;
    options?: checkboxOption[] | radioOption[];
}
export type checkboxOption = { content: string; value: string };
export type radioOption = { content: string; value: string; for: string };
