import { z } from 'zod';
export declare const ListVersionsSchema: z.ZodObject<{
    flowId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    flowId: string;
}, {
    flowId: string;
}>;
export declare const VersionsOutputSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    flowId: z.ZodString;
    status: z.ZodString;
    name: z.ZodString;
    current: z.ZodBoolean;
    published: z.ZodBoolean;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    flowId: string;
    status: string;
    id: number;
    name: string;
    published: boolean;
    createdAt: Date;
    updatedAt: Date;
    current: boolean;
}, {
    flowId: string;
    status: string;
    id: number;
    name: string;
    published: boolean;
    createdAt: Date;
    updatedAt: Date;
    current: boolean;
}>, "many">;
export type ListVersionsDTO = z.infer<typeof ListVersionsSchema>;
export type VersionsOutputDTO = z.infer<typeof VersionsOutputSchema>;
