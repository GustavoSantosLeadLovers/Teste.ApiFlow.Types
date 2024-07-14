import { TRPCError } from '@trpc/server';
import { TRPC_ERROR_CODE_KEY } from '@trpc/server/dist/rpc/codes';
export declare class CustomTRPCError extends TRPCError {
    readonly details: {
        [key: string]: string | CustomTRPCError[];
    } | undefined;
    readonly childErrors: CustomTRPCError[] | undefined;
    constructor(opts: {
        message?: string;
        code: TRPC_ERROR_CODE_KEY;
        cause?: unknown;
        details?: {
            [key: string]: string | CustomTRPCError[];
        };
        childErrors?: CustomTRPCError[];
    });
}
