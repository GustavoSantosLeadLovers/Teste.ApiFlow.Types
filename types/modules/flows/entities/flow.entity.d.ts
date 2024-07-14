import { z } from "zod";
export declare const FlowInputSchema: z.ZodObject<{
    machineId: z.ZodNumber;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    machineId: number;
}, {
    name?: string | undefined;
    machineId: number;
}>;
export declare const FlowOutputSchema: z.ZodObject<{
    id: z.ZodString;
    machineId: z.ZodNumber;
    name: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    updatedAt?: Date | undefined;
    id: string;
    createdAt: Date;
    machineId: number;
}, {
    name?: string | undefined;
    updatedAt?: Date | undefined;
    id: string;
    createdAt: Date;
    machineId: number;
}>;
export type FlowInputEntity = z.infer<typeof FlowInputSchema>;
export type FlowOutputEntity = z.infer<typeof FlowOutputSchema>;
