/// <reference types="qs" />
/// <reference types="express" />
/// <reference types="node" />
/// <reference types="ws" />
import { CustomTRPCError } from '../../helpers/CustomTRPCError';
export declare const trpc: {
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
                    [key: string]: string | CustomTRPCError[];
                } | null | undefined;
                childErrors: {
                    data: {
                        code: string | CustomTRPCError[] | undefined;
                        details: {
                            flowId: string | CustomTRPCError[] | undefined;
                            versionId: string | CustomTRPCError[] | undefined;
                            sequenceId: string | CustomTRPCError[] | undefined;
                            sequenceName: string | CustomTRPCError[] | undefined;
                            messageName: string | CustomTRPCError[] | undefined;
                        };
                    };
                    message: string | CustomTRPCError[] | undefined;
                }[] | null | undefined;
                zod: import("zod").ZodIssue[] | null;
            };
            code: import("@trpc/server/dist/rpc").TRPC_ERROR_CODE_NUMBER;
        };
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>;
    procedure: import("@trpc/server").ProcedureBuilder<{
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
                        [key: string]: string | CustomTRPCError[];
                    } | null | undefined;
                    childErrors: {
                        data: {
                            code: string | CustomTRPCError[] | undefined;
                            details: {
                                flowId: string | CustomTRPCError[] | undefined;
                                versionId: string | CustomTRPCError[] | undefined;
                                sequenceId: string | CustomTRPCError[] | undefined;
                                sequenceName: string | CustomTRPCError[] | undefined;
                                messageName: string | CustomTRPCError[] | undefined;
                            };
                        };
                        message: string | CustomTRPCError[] | undefined;
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
        _input_in: typeof import("@trpc/server").unsetMarker;
        _input_out: typeof import("@trpc/server").unsetMarker;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
        _meta: object;
    }>;
    middleware: <TNewParams extends import("@trpc/server").ProcedureParams<import("@trpc/server").AnyRootConfig, unknown, unknown, unknown, unknown, unknown, unknown>>(fn: import("@trpc/server").MiddlewareFunction<{
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
                        [key: string]: string | CustomTRPCError[];
                    } | null | undefined;
                    childErrors: {
                        data: {
                            code: string | CustomTRPCError[] | undefined;
                            details: {
                                flowId: string | CustomTRPCError[] | undefined;
                                versionId: string | CustomTRPCError[] | undefined;
                                sequenceId: string | CustomTRPCError[] | undefined;
                                sequenceName: string | CustomTRPCError[] | undefined;
                                messageName: string | CustomTRPCError[] | undefined;
                            };
                        };
                        message: string | CustomTRPCError[] | undefined;
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
    }, TNewParams>) => import("@trpc/server").MiddlewareFunction<{
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
                        [key: string]: string | CustomTRPCError[];
                    } | null | undefined;
                    childErrors: {
                        data: {
                            code: string | CustomTRPCError[] | undefined;
                            details: {
                                flowId: string | CustomTRPCError[] | undefined;
                                versionId: string | CustomTRPCError[] | undefined;
                                sequenceId: string | CustomTRPCError[] | undefined;
                                sequenceName: string | CustomTRPCError[] | undefined;
                                messageName: string | CustomTRPCError[] | undefined;
                            };
                        };
                        message: string | CustomTRPCError[] | undefined;
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
    }, TNewParams>;
    router: <TProcRouterRecord extends import("@trpc/server").ProcedureRouterRecord>(procedures: TProcRouterRecord) => import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
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
                    [key: string]: string | CustomTRPCError[];
                } | null | undefined;
                childErrors: {
                    data: {
                        code: string | CustomTRPCError[] | undefined;
                        details: {
                            flowId: string | CustomTRPCError[] | undefined;
                            versionId: string | CustomTRPCError[] | undefined;
                            sequenceId: string | CustomTRPCError[] | undefined;
                            sequenceName: string | CustomTRPCError[] | undefined;
                            messageName: string | CustomTRPCError[] | undefined;
                        };
                    };
                    message: string | CustomTRPCError[] | undefined;
                }[] | null | undefined;
                zod: import("zod").ZodIssue[] | null;
            };
            code: import("@trpc/server/dist/rpc").TRPC_ERROR_CODE_NUMBER;
        };
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>, TProcRouterRecord>;
    mergeRouters: typeof import("@trpc/server").mergeRoutersGeneric;
};
export declare const publicProcedure: import("@trpc/server").ProcedureBuilder<{
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
                    [key: string]: string | CustomTRPCError[];
                } | null | undefined;
                childErrors: {
                    data: {
                        code: string | CustomTRPCError[] | undefined;
                        details: {
                            flowId: string | CustomTRPCError[] | undefined;
                            versionId: string | CustomTRPCError[] | undefined;
                            sequenceId: string | CustomTRPCError[] | undefined;
                            sequenceName: string | CustomTRPCError[] | undefined;
                            messageName: string | CustomTRPCError[] | undefined;
                        };
                    };
                    message: string | CustomTRPCError[] | undefined;
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
    _input_in: typeof import("@trpc/server").unsetMarker;
    _input_out: typeof import("@trpc/server").unsetMarker;
    _output_in: typeof import("@trpc/server").unsetMarker;
    _output_out: typeof import("@trpc/server").unsetMarker;
    _meta: object;
}>;
export declare const privateProcedure: import("@trpc/server").ProcedureBuilder<{
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
                    [key: string]: string | CustomTRPCError[];
                } | null | undefined;
                childErrors: {
                    data: {
                        code: string | CustomTRPCError[] | undefined;
                        details: {
                            flowId: string | CustomTRPCError[] | undefined;
                            versionId: string | CustomTRPCError[] | undefined;
                            sequenceId: string | CustomTRPCError[] | undefined;
                            sequenceName: string | CustomTRPCError[] | undefined;
                            messageName: string | CustomTRPCError[] | undefined;
                        };
                    };
                    message: string | CustomTRPCError[] | undefined;
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
    _input_in: typeof import("@trpc/server").unsetMarker;
    _input_out: typeof import("@trpc/server").unsetMarker;
    _output_in: typeof import("@trpc/server").unsetMarker;
    _output_out: typeof import("@trpc/server").unsetMarker;
}>;
export declare const router: <TProcRouterRecord extends import("@trpc/server").ProcedureRouterRecord>(procedures: TProcRouterRecord) => import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
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
                [key: string]: string | CustomTRPCError[];
            } | null | undefined;
            childErrors: {
                data: {
                    code: string | CustomTRPCError[] | undefined;
                    details: {
                        flowId: string | CustomTRPCError[] | undefined;
                        versionId: string | CustomTRPCError[] | undefined;
                        sequenceId: string | CustomTRPCError[] | undefined;
                        sequenceName: string | CustomTRPCError[] | undefined;
                        messageName: string | CustomTRPCError[] | undefined;
                    };
                };
                message: string | CustomTRPCError[] | undefined;
            }[] | null | undefined;
            zod: import("zod").ZodIssue[] | null;
        };
        code: import("@trpc/server/dist/rpc").TRPC_ERROR_CODE_NUMBER;
    };
    transformer: import("@trpc/server").DefaultDataTransformer;
}>, TProcRouterRecord>;
