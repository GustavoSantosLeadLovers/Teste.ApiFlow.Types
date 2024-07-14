/// <reference types="qs" />
/// <reference types="express" />
/// <reference types="node" />
/// <reference types="ws" />
export declare const sessionRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
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
    create: import("@trpc/server").BuildProcedure<"mutation", {
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
        _ctx_out: {
            req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>> | import("http").IncomingMessage;
            res: import("express").Response<any, Record<string, any>> | import("ws");
            user: {
                key: string;
            } | undefined;
        };
        _input_in: {
            token: string;
            refresh_token: string;
        };
        _input_out: {
            token: string;
            refresh_token: string;
        };
        _output_in: {
            token: string;
            user: {
                id: number;
                name: string;
                email: string;
                username: string;
                user_id: number;
            };
        };
        _output_out: {
            token: string;
            user: {
                id: number;
                name: string;
                email: string;
                username: string;
                user_id: number;
            };
        };
    }, unknown>;
}>;
