import { z } from "zod";

export const checkboxOptionSchema = z.object({
    content: z.string(),
    value: z.string(),
});

export const radioOptionSchema = z.object({
    content: z.string(),
    value: z.string(),
    for: z.string(),
});

export const fieldSchema = z.discriminatedUnion("type", [
    z.object({
        name: z.string(),
        title: z.string(),
        value: z.string(),
        requierd: z.boolean(),
        type: z.literal("text"),
        content: z.string(),
    }),
    z.object({
        name: z.string(),
        title: z.string(),
        value: z.string(),
        requierd: z.boolean(),
        type: z.union([z.literal("checkbox"), z.literal("select")]),
        options: z.array(checkboxOptionSchema),
    }),
    z.object({
        name: z.string(),
        title: z.string(),
        value: z.string(),
        requierd: z.boolean(),
        type: z.literal("radio"),
        options: z.array(radioOptionSchema),
    }),
]);

export const creatFormDto = z.object({
    title: z.string(),
    description: z.string(),
    visibility: z.boolean(),
    fields: z.array(fieldSchema),
});

export type CreateFormDto = z.infer<typeof creatFormDto>;
