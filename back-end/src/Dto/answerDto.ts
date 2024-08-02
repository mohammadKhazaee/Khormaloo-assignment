import { text } from "express"
import z from "zod"


const answerShema = z.object({
    fieldId: z.coerce.number(),
    value: z.discriminatedUnion("type", [z.object({ type: z.literal('Text'), content: z.string() }),
    z.object({ type: z.literal('Radio'), content: z.string(), value: z.string(), for: z.string() }),
    z.object({ type: z.union([z.literal("Checkbox"), z.literal("Select")]), content: z.string(), value: z.string() }),
    ])
})


export const createAnswerDto = z.object({
    responserId: z.coerce.number(),
    answers: z.array(answerShema),
    fieldid: z.number(),
})


export type CreateAnswerDto = z.infer<typeof createAnswerDto>