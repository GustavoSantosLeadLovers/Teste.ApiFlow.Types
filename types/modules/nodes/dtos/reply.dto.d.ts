import { z } from 'zod';
export declare const replyInputSchema: z.ZodObject<{
    messageId: z.ZodDefault<z.ZodString>;
    childrenReplyTrigger: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    messageId: string;
    childrenReplyTrigger: string[];
}, {
    messageId?: string | undefined;
    childrenReplyTrigger?: string[] | undefined;
}>;
export type Reply = z.infer<typeof replyInputSchema>;
