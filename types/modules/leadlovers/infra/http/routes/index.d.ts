/// <reference types="qs" />
/// <reference types="express" />
/// <reference types="node" />
/// <reference types="ws" />
export declare const leadloversRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
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
    listMachines: import("@trpc/server").BuildProcedure<"query", {
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
        _input_in: typeof import("@trpc/server").unsetMarker;
        _input_out: typeof import("@trpc/server").unsetMarker;
        _output_in: {
            type: number;
            status: number;
            id: number;
            name: string;
        }[];
        _output_out: {
            type: number;
            status: number;
            id: number;
            name: string;
        }[];
    }, unknown>;
    listWhatsAppMachineType: import("@trpc/server").BuildProcedure<"query", {
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
            machineId: number;
        };
        _input_out: {
            machineId: number;
        };
        _output_in: {
            type: "cloud_api" | "qrcode";
        };
        _output_out: {
            type: "cloud_api" | "qrcode";
        };
    }, unknown>;
    allowCreateFlowByMachineId: import("@trpc/server").BuildProcedure<"query", {
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
            machineId: number;
        };
        _input_out: {
            machineId: number;
        };
        _output_in: {
            allow: boolean;
        };
        _output_out: {
            allow: boolean;
        };
    }, unknown>;
    testWhatsAppMessageSending: import("@trpc/server").BuildProcedure<"mutation", {
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
            machineId: number;
            messageId: string;
            phoneNumber: string;
        };
        _input_out: {
            machineId: number;
            messageId: string;
            phoneNumber: string;
        };
        _output_in: {
            message: string;
            status: "error" | "success";
        };
        _output_out: {
            message: string;
            status: "error" | "success";
        };
    }, unknown>;
    listWhatsAppMessageSendingErrors: import("@trpc/server").BuildProcedure<"query", {
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
            machineId: number;
            messageId: string;
        };
        _input_out: {
            flowId: string;
            machineId: number;
            messageId: string;
        };
        _output_in: {
            total: number;
            items: {
                leadId: number;
                leadPhone: string;
                leadName: string | null;
                errorCode: number;
                errorDescription: string;
            }[];
        };
        _output_out: {
            total: number;
            items: {
                leadId: number;
                leadPhone: string;
                leadName: string | null;
                errorCode: number;
                errorDescription: string;
            }[];
        };
    }, unknown>;
    listWhatsAppMessageErrors: import("@trpc/server").BuildProcedure<"query", {
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
        _input_in: typeof import("@trpc/server").unsetMarker;
        _input_out: typeof import("@trpc/server").unsetMarker;
        _output_in: {
            id: number;
            errorCode: number;
            errorDescription: string;
        }[];
        _output_out: {
            id: number;
            errorCode: number;
            errorDescription: string;
        }[];
    }, unknown>;
    listSequencesByMachineId: import("@trpc/server").BuildProcedure<"query", {
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
            machineId: number;
        };
        _input_out: {
            flowId: string;
            machineId: number;
        };
        _output_in: {
            nodeId?: string | undefined;
            type: number;
            id: number;
            name: string;
            whatsAppGroup: boolean;
        }[];
        _output_out: {
            nodeId?: string | undefined;
            type: number;
            id: number;
            name: string;
            whatsAppGroup: boolean;
        }[];
    }, unknown>;
    listSequenceNumber: import("@trpc/server").BuildProcedure<"query", {
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
            sequenceId?: number | undefined;
            parentNode?: string | undefined;
            flowId: string;
            machineId: number;
        };
        _input_out: {
            sequenceId?: number | undefined;
            parentNode?: string | undefined;
            flowId: string;
            machineId: number;
        };
        _output_in: {
            nodeId?: string | undefined;
            id: number;
            sequenceNumber: number;
            subtitle: string;
        }[];
        _output_out: {
            nodeId?: string | undefined;
            id: number;
            sequenceNumber: number;
            subtitle: string;
        }[];
    }, unknown>;
    listTags: import("@trpc/server").BuildProcedure<"query", {
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
        _input_in: typeof import("@trpc/server").unsetMarker;
        _input_out: typeof import("@trpc/server").unsetMarker;
        _output_in: {
            id: number;
            name: string;
        }[];
        _output_out: {
            id: number;
            name: string;
        }[];
    }, unknown>;
    listTemplates: import("@trpc/server").BuildProcedure<"query", {
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
            machineId: number;
        };
        _input_out: {
            machineId: number;
        };
        _output_in: {
            buttons?: {
                id: string;
                text: string;
                url: string | null;
            }[] | undefined;
            tags?: {
                value?: string | undefined;
                id: string;
                name: string;
            }[] | undefined;
            statusDescription?: string | undefined;
            status: number;
            id: string;
            text: string;
            name: string;
            userId: number;
            templateId: string;
            accountId: number;
            html: string;
            htmlHeader: string | null;
            htmlFooter: string | null;
            language: string;
        }[];
        _output_out: {
            buttons?: {
                id: string;
                text: string;
                url: string | null;
            }[] | undefined;
            tags?: {
                value: string;
                id: string;
                name: string;
            }[] | undefined;
            statusDescription?: string | undefined;
            status: number;
            id: string;
            text: string;
            name: string;
            userId: number;
            templateId: string;
            accountId: number;
            html: string;
            htmlHeader: string | null;
            htmlFooter: string | null;
            language: string;
        }[];
    }, unknown>;
    listTemplateDetailByTemplateId: import("@trpc/server").BuildProcedure<"query", {
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
            machineId: number;
            templateId: number;
        };
        _input_out: {
            machineId: number;
            templateId: number;
        };
        _output_in: {
            buttons?: {
                id: string;
                text: string;
                url: string | null;
            }[] | undefined;
            tags?: {
                value?: string | undefined;
                id: string;
                name: string;
            }[] | undefined;
            hasAttachments?: "video" | "image" | "document" | undefined;
            html: string;
        };
        _output_out: {
            buttons?: {
                id: string;
                text: string;
                url: string | null;
            }[] | undefined;
            tags?: {
                value: string;
                id: string;
                name: string;
            }[] | undefined;
            hasAttachments?: "video" | "image" | "document" | undefined;
            html: string;
        };
    }, unknown>;
    listLeadsFromFunnels: import("@trpc/server").BuildProcedure<"query", {
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
            machineId: number;
        };
        _input_out: {
            flowId: string;
            machineId: number;
        };
        _output_in: {
            id: string;
            leads: number;
        }[];
        _output_out: {
            id: string;
            leads: number;
        }[];
    }, unknown>;
    listFunnelDetails: import("@trpc/server").BuildProcedure<"query", {
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
            sequenceId: string;
            machineId: number;
        };
        _input_out: {
            flowId: string;
            sequenceId: string;
            machineId: number;
        };
        _output_in: {
            errors?: number | undefined;
            leadsExecToday?: number | undefined;
            leadsLocked?: number | undefined;
            sent?: number | undefined;
            delivered?: number | undefined;
            view?: number | undefined;
            clicked?: number | undefined;
            unsub?: number | undefined;
            id: string;
            leads: number;
        }[];
        _output_out: {
            errors?: number | undefined;
            leadsExecToday?: number | undefined;
            leadsLocked?: number | undefined;
            sent?: number | undefined;
            delivered?: number | undefined;
            view?: number | undefined;
            clicked?: number | undefined;
            unsub?: number | undefined;
            id: string;
            leads: number;
        }[];
    }, unknown>;
    listTeamAttendants: import("@trpc/server").BuildProcedure<"query", {
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
        _input_in: typeof import("@trpc/server").unsetMarker;
        _input_out: typeof import("@trpc/server").unsetMarker;
        _output_in: {
            id: number;
            name: string;
        }[];
        _output_out: {
            id: number;
            name: string;
        }[];
    }, unknown>;
    listWhatsAppQrCode: import("@trpc/server").BuildProcedure<"query", {
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
            accountId: number;
        };
        _input_out: {
            accountId: number;
        };
        _output_in: string;
        _output_out: string;
    }, unknown>;
    listAttendants: import("@trpc/server").BuildProcedure<"query", {
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
        _input_in: typeof import("@trpc/server").unsetMarker;
        _input_out: typeof import("@trpc/server").unsetMarker;
        _output_in: {
            id: number;
            name: string;
            email: string;
        }[];
        _output_out: {
            id: number;
            name: string;
            email: string;
        }[];
    }, unknown>;
    listAllLeadFields: import("@trpc/server").BuildProcedure<"query", {
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
        _input_in: typeof import("@trpc/server").unsetMarker;
        _input_out: typeof import("@trpc/server").unsetMarker;
        _output_in: {
            id: number;
            name: string;
        }[];
        _output_out: {
            id: number;
            name: string;
        }[];
    }, unknown>;
    listProducts: import("@trpc/server").BuildProcedure<"query", {
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
        _input_in: typeof import("@trpc/server").unsetMarker;
        _input_out: typeof import("@trpc/server").unsetMarker;
        _output_in: {
            id: number;
            name: string;
        }[];
        _output_out: {
            id: number;
            name: string;
        }[];
    }, unknown>;
    listCRMBoards: import("@trpc/server").BuildProcedure<"query", {
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
        _input_in: typeof import("@trpc/server").unsetMarker;
        _input_out: typeof import("@trpc/server").unsetMarker;
        _output_in: {
            id: number;
            name: string;
            columns: {
                id: number;
                name: string;
            }[];
        }[];
        _output_out: {
            id: number;
            name: string;
            columns: {
                id: number;
                name: string;
            }[];
        }[];
    }, unknown>;
    listCRMGroups: import("@trpc/server").BuildProcedure<"query", {
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
        _input_in: typeof import("@trpc/server").unsetMarker;
        _input_out: typeof import("@trpc/server").unsetMarker;
        _output_in: {
            id: number;
            name: string;
        }[];
        _output_out: {
            id: number;
            name: string;
        }[];
    }, unknown>;
    createTag: import("@trpc/server").BuildProcedure<"mutation", {
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
            name: string;
        };
        _input_out: {
            name: string;
        };
        _output_in: {
            id: number;
            name: string;
        };
        _output_out: {
            id: number;
            name: string;
        };
    }, unknown>;
    createTagToLeadsWithError: import("@trpc/server").BuildProcedure<"mutation", {
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
            messageId: string;
            tagIds: number[];
        };
        _input_out: {
            flowId: string;
            messageId: string;
            tagIds: number[];
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, void>;
    createContact: import("@trpc/server").BuildProcedure<"mutation", {
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
            name: string;
            phone: string;
        };
        _input_out: {
            name: string;
            phone: string;
        };
        _output_in: {
            id: number;
            name: string;
            phone: string;
        };
        _output_out: {
            id: number;
            name: string;
            phone: string;
        };
    }, unknown>;
    listContacts: import("@trpc/server").BuildProcedure<"query", {
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
        _input_in: typeof import("@trpc/server").unsetMarker;
        _input_out: typeof import("@trpc/server").unsetMarker;
        _output_in: {
            id: number;
            name: string;
            phone: string;
        }[];
        _output_out: {
            id: number;
            name: string;
            phone: string;
        }[];
    }, unknown>;
    listContactById: import("@trpc/server").BuildProcedure<"query", {
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
            id: number;
        };
        _input_out: {
            id: number;
        };
        _output_in: {
            id: number;
            name: string;
            phone: string;
        };
        _output_out: {
            id: number;
            name: string;
            phone: string;
        };
    }, unknown>;
    editContact: import("@trpc/server").BuildProcedure<"mutation", {
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
            id: number;
            name: string;
            phone: string;
        };
        _input_out: {
            id: number;
            name: string;
            phone: string;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, void>;
    removeContact: import("@trpc/server").BuildProcedure<"mutation", {
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
            id: number;
        };
        _input_out: {
            id: number;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, void>;
    changeMachineIdLinkAccount: import("@trpc/server").BuildProcedure<"mutation", {
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
            machineId: number;
            accountId: number;
        };
        _input_out: {
            machineId: number;
            accountId: number;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, void>;
    verifyMachineIdLinkWhatsAppAccount: import("@trpc/server").BuildProcedure<"mutation", {
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
            machineId: number;
            accountId: number;
        };
        _input_out: {
            machineId: number;
            accountId: number;
        };
        _output_in: string | boolean;
        _output_out: string | boolean;
    }, unknown>;
    copyContactsWithErrors: import("@trpc/server").BuildProcedure<"mutation", {
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
            sequenceId: string;
            machineId: number;
            messageId: string;
            copyTo: {
                machineId: number;
                funnelId: {
                    id?: number | undefined;
                    nodeId?: string | undefined;
                };
                levelId: {
                    id?: number | undefined;
                    nodeId?: string | undefined;
                };
            };
        };
        _input_out: {
            flowId: string;
            sequenceId: string;
            machineId: number;
            messageId: string;
            copyTo: {
                machineId: number;
                funnelId: {
                    id?: number | undefined;
                    nodeId?: string | undefined;
                };
                levelId: {
                    id?: number | undefined;
                    nodeId?: string | undefined;
                };
            };
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, void>;
    listWhatsAppAccounts: import("@trpc/server").BuildProcedure<"query", {
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
            id: number;
            name: string;
            isCloudApi: boolean;
            phoneNumber: string | null;
            authenticatedCloudApi: boolean;
            authenticatedQrCode: boolean;
            isCurrentAccount: number;
        }[];
        _output_out: {
            id: number;
            name: string;
            isCloudApi: boolean;
            phoneNumber: string | null;
            authenticatedCloudApi: boolean;
            authenticatedQrCode: boolean;
            isCurrentAccount: number;
        }[];
    }, unknown>;
}>;
