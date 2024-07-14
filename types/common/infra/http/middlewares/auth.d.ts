/// <reference types="qs" />
/// <reference types="express" />
/// <reference types="node" />
/// <reference types="ws" />
export declare const isAuthed: () => import("@trpc/server").MiddlewareFunction<{
    _config: import("@trpc/server").RootConfig<{
        ctx: {
            req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>> | import("http").IncomingMessage;
            res: import("express").Response<any, Record<string, any>> | import("ws");
            user: {
                key: string;
            } | undefined;
        };
        meta: object;
        errorShape: {
            message: string;
            data: {
                httpStatus: number;
                path: string | undefined;
                code: string;
                details: {
                    [key: string]: string | import("../../../helpers/CustomTRPCError").CustomTRPCError[];
                } | null | undefined;
                childErrors: {
                    data: {
                        code: string | import("../../../helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                        details: {
                            flowId: string | import("../../../helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                            versionId: string | import("../../../helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                            sequenceId: string | import("../../../helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                            sequenceName: string | import("../../../helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                            messageName: string | import("../../../helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                        };
                    };
                    message: string | import("../../../helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                }[] | null | undefined;
                zod: import("zod").ZodIssue[] | null;
            };
            code: import("@trpc/server/dist/rpc").TRPC_ERROR_CODE_NUMBER;
        };
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>;
    _ctx_out: {
        req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>> | import("http").IncomingMessage;
        res: import("express").Response<any, Record<string, any>> | import("ws");
        user: {
            key: string;
        } | undefined;
    };
    _input_out: unknown;
    _input_in: unknown;
    _output_in: unknown;
    _output_out: unknown;
    _meta: object;
}, {
    _config: import("@trpc/server").RootConfig<{
        ctx: {
            req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>> | import("http").IncomingMessage;
            res: import("express").Response<any, Record<string, any>> | import("ws");
            user: {
                key: string;
            } | undefined;
        };
        meta: object;
        errorShape: {
            message: string;
            data: {
                httpStatus: number;
                path: string | undefined;
                code: string;
                details: {
                    [key: string]: string | import("../../../helpers/CustomTRPCError").CustomTRPCError[];
                } | null | undefined;
                childErrors: {
                    data: {
                        code: string | import("../../../helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                        details: {
                            flowId: string | import("../../../helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                            versionId: string | import("../../../helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                            sequenceId: string | import("../../../helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                            sequenceName: string | import("../../../helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                            messageName: string | import("../../../helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                        };
                    };
                    message: string | import("../../../helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                }[] | null | undefined;
                zod: import("zod").ZodIssue[] | null;
            };
            code: import("@trpc/server/dist/rpc").TRPC_ERROR_CODE_NUMBER;
        };
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>;
    _ctx_out: {
        user: {
            key: string;
        };
    };
    _input_in: unknown;
    _input_out: unknown;
    _output_in: unknown;
    _output_out: unknown;
    _meta: object;
}>;
