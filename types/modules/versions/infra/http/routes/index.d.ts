/// <reference types="qs" />
/// <reference types="express" />
/// <reference types="node" />
/// <reference types="ws" />
export declare const versionRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
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
                [key: string]: string | import("../../../../../common/helpers/CustomTRPCError").CustomTRPCError[];
            } | null | undefined;
            childErrors: {
                data: {
                    code: string | import("../../../../../common/helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                    details: {
                        flowId: string | import("../../../../../common/helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                        versionId: string | import("../../../../../common/helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                        sequenceId: string | import("../../../../../common/helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                        sequenceName: string | import("../../../../../common/helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                        messageName: string | import("../../../../../common/helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                    };
                };
                message: string | import("../../../../../common/helpers/CustomTRPCError").CustomTRPCError[] | undefined;
            }[] | null | undefined;
            zod: import("zod").ZodIssue[] | null;
        };
        code: import("@trpc/server/dist/rpc").TRPC_ERROR_CODE_NUMBER;
    };
    transformer: import("@trpc/server").DefaultDataTransformer;
}>, {
    listAll: import("@trpc/server").BuildProcedure<"query", {
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
                        [key: string]: string | import("../../../../../common/helpers/CustomTRPCError").CustomTRPCError[];
                    } | null | undefined;
                    childErrors: {
                        data: {
                            code: string | import("../../../../../common/helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                            details: {
                                flowId: string | import("../../../../../common/helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                                versionId: string | import("../../../../../common/helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                                sequenceId: string | import("../../../../../common/helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                                sequenceName: string | import("../../../../../common/helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                                messageName: string | import("../../../../../common/helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                            };
                        };
                        message: string | import("../../../../../common/helpers/CustomTRPCError").CustomTRPCError[] | undefined;
                    }[] | null | undefined;
                    zod: import("zod").ZodIssue[] | null;
                };
                code: import("@trpc/server/dist/rpc").TRPC_ERROR_CODE_NUMBER;
            };
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: import("@trpc/server").Overwrite<{
            req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>> | import("http").IncomingMessage;
            res: import("express").Response<any, Record<string, any>> | import("ws");
            user: {
                key: string;
            } | undefined;
        }, {
            user: {
                key: string;
            };
        }>;
        _input_in: {
            flowId: string;
        };
        _input_out: {
            flowId: string;
        };
        _output_in: {
            flowId: string;
            status: string;
            id: number;
            name: string;
            published: boolean;
            createdAt: Date;
            updatedAt: Date;
            current: boolean;
        }[];
        _output_out: {
            flowId: string;
            status: string;
            id: number;
            name: string;
            published: boolean;
            createdAt: Date;
            updatedAt: Date;
            current: boolean;
        }[];
    }, unknown>;
}>;
