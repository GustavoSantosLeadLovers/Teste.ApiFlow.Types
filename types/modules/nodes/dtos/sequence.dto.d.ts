import { z } from 'zod';
export declare const sequenceInputSchema: z.ZodObject<{
    name: z.ZodString;
    machineId: z.ZodNumber;
    collapsed: z.ZodDefault<z.ZodBoolean>;
    needSorting: z.ZodDefault<z.ZodBoolean>;
    amountMessages: z.ZodDefault<z.ZodNumber>;
    amountActions: z.ZodDefault<z.ZodNumber>;
    childrenEdges: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    childrenNodes: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    childrenEdgesDifferentSequence: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    childrenNodesCloudButtonReply: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    childrenEdgesCloudButtonReply: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    duplicationErrors: z.ZodOptional<z.ZodArray<z.ZodObject<{
        where: z.ZodLiteral<"message">;
        what: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        where: "message";
        what: string;
    }, {
        where: "message";
        what: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    duplicationErrors?: {
        where: "message";
        what: string;
    }[] | undefined;
    name: string;
    machineId: number;
    collapsed: boolean;
    needSorting: boolean;
    amountMessages: number;
    amountActions: number;
    childrenEdges: string[];
    childrenNodes: string[];
    childrenEdgesDifferentSequence: string[];
    childrenNodesCloudButtonReply: string[];
    childrenEdgesCloudButtonReply: string[];
}, {
    collapsed?: boolean | undefined;
    needSorting?: boolean | undefined;
    amountMessages?: number | undefined;
    amountActions?: number | undefined;
    childrenEdges?: string[] | undefined;
    childrenNodes?: string[] | undefined;
    childrenEdgesDifferentSequence?: string[] | undefined;
    childrenNodesCloudButtonReply?: string[] | undefined;
    childrenEdgesCloudButtonReply?: string[] | undefined;
    duplicationErrors?: {
        where: "message";
        what: string;
    }[] | undefined;
    name: string;
    machineId: number;
}>;
export type SequenceData = z.infer<typeof sequenceInputSchema>;
