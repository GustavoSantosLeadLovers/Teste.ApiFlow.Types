import { z } from 'zod';
export declare const CreateSessionSchema: z.ZodObject<{
    token: z.ZodString;
    refresh_token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    token: string;
    refresh_token: string;
}, {
    token: string;
    refresh_token: string;
}>;
export declare const SessionSchema: z.ZodObject<{
    token: z.ZodString;
    user: z.ZodObject<{
        id: z.ZodNumber;
        username: z.ZodString;
        name: z.ZodString;
        email: z.ZodString;
        user_id: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: number;
        username: string;
        name: string;
        email: string;
        user_id: number;
    }, {
        id: number;
        username: string;
        name: string;
        email: string;
        user_id: number;
    }>;
}, "strip", z.ZodTypeAny, {
    token: string;
    user: {
        id: number;
        username: string;
        name: string;
        email: string;
        user_id: number;
    };
}, {
    token: string;
    user: {
        id: number;
        username: string;
        name: string;
        email: string;
        user_id: number;
    };
}>;
export type CreateSessionEntity = z.infer<typeof CreateSessionSchema>;
export type SessionEntity = z.infer<typeof SessionSchema>;
