/// <reference types="qs" />
/// <reference types="express" />
/// <reference types="node" />
/// <reference types="ws" />
export declare const edgeRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
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
            data?: string | undefined;
            markerStart?: string | undefined;
            markerEnd?: string | undefined;
            sourceHandle?: string | undefined;
            targetHandle?: string | undefined;
            label?: string | undefined;
            labelStyle?: string | undefined;
            labelShowBg?: boolean | undefined;
            labelBgStyle?: string | undefined;
            labelBgPadding?: string | undefined;
            labelBgBorderRadius?: number | undefined;
            style?: string | undefined;
            animated?: boolean | undefined;
            hidden?: boolean | undefined;
            deletable?: boolean | undefined;
            focusable?: boolean | undefined;
            className?: string | undefined;
            sourceNode?: string | undefined;
            targetNode?: string | undefined;
            selected?: boolean | undefined;
            zIndex?: number | undefined;
            ariaLabel?: string | undefined;
            interactionWidth?: number | undefined;
            flowId: string;
            sourceParentCode: string;
            targetParentCode: string;
            type: import("../../../dtos/edge.dto").edgeType;
            source: string;
            target: string;
            id: string;
        };
        _input_out: {
            reactFlowId: string;
            data?: string | undefined;
            sourceHandle?: string | undefined;
            targetHandle?: string | undefined;
            label?: string | undefined;
            labelStyle?: string | undefined;
            labelShowBg?: boolean | undefined;
            labelBgStyle?: string | undefined;
            labelBgPadding?: string | undefined;
            labelBgBorderRadius?: number | undefined;
            style?: string | undefined;
            animated?: boolean | undefined;
            hidden?: boolean | undefined;
            deletable?: boolean | undefined;
            focusable?: boolean | undefined;
            className?: string | undefined;
            sourceNode?: string | undefined;
            targetNode?: string | undefined;
            selected?: boolean | undefined;
            zIndex?: number | undefined;
            ariaLabel?: string | undefined;
            interactionWidth?: number | undefined;
            flowId: string;
            sourceParentCode: string;
            targetParentCode: string;
            type: import("../../../dtos/edge.dto").edgeType;
            source: string;
            target: string;
            markerStart: string;
            markerEnd: string;
            id: string;
        };
        _output_in: {
            versionId: number;
            data: string | null;
            sourceParentCode: string;
            targetParentCode: string;
            type: string | null;
            source: string;
            target: string;
            markerStart: string;
            markerEnd: string;
            sourceHandle: string | null;
            targetHandle: string | null;
            label: string | null;
            labelStyle: string | null;
            labelShowBg: boolean | null;
            labelBgStyle: string | null;
            labelBgPadding: string | null;
            labelBgBorderRadius: number | null;
            style: string | null;
            animated: boolean | null;
            hidden: boolean | null;
            deletable: boolean | null;
            focusable: boolean | null;
            className: string | null;
            sourceNode: string | null;
            targetNode: string | null;
            selected: boolean | null;
            zIndex: number | null;
            ariaLabel: string | null;
            interactionWidth: number | null;
            id: string;
            reactFlowId: string;
        };
        _output_out: {
            data: {
                content: string | null;
                sourceParentCode: string;
                targetParentCode: string;
                versionId: number;
            };
            id: string;
            versionId: number;
            sourceParentCode: string;
            targetParentCode: string;
            type: string | null;
            source: string;
            target: string;
            markerStart: string;
            markerEnd: string;
            sourceHandle: string | null;
            targetHandle: string | null;
            label: string | null;
            labelStyle: string | null;
            labelShowBg: boolean | null;
            labelBgStyle: string | null;
            labelBgPadding: string | null;
            labelBgBorderRadius: number | null;
            style: string | null;
            animated: boolean | null;
            hidden: boolean | null;
            deletable: boolean | null;
            focusable: boolean | null;
            className: string | null;
            sourceNode: string | null;
            targetNode: string | null;
            selected: boolean | null;
            zIndex: number | null;
            ariaLabel: string | null;
            interactionWidth: number | null;
            reactFlowId: string;
        };
    }, unknown>;
    edit: import("@trpc/server").BuildProcedure<"mutation", {
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
            data?: string | undefined;
            sourceParentCode?: string | undefined;
            targetParentCode?: string | undefined;
            type?: import("../../../dtos/edge.dto").edgeType | undefined;
            source?: string | undefined;
            target?: string | undefined;
            markerStart?: string | undefined;
            markerEnd?: string | undefined;
            sourceHandle?: string | undefined;
            targetHandle?: string | undefined;
            label?: string | undefined;
            labelStyle?: string | undefined;
            labelShowBg?: boolean | undefined;
            labelBgStyle?: string | undefined;
            labelBgPadding?: string | undefined;
            labelBgBorderRadius?: number | undefined;
            style?: string | undefined;
            animated?: boolean | undefined;
            hidden?: boolean | undefined;
            deletable?: boolean | undefined;
            focusable?: boolean | undefined;
            className?: string | undefined;
            sourceNode?: string | undefined;
            targetNode?: string | undefined;
            selected?: boolean | undefined;
            zIndex?: number | undefined;
            ariaLabel?: string | undefined;
            interactionWidth?: number | undefined;
            flowId: string;
            id: string;
        };
        _input_out: {
            reactFlowId: string;
            data?: string | undefined;
            sourceParentCode?: string | undefined;
            targetParentCode?: string | undefined;
            type?: import("../../../dtos/edge.dto").edgeType | undefined;
            source?: string | undefined;
            target?: string | undefined;
            markerStart?: string | undefined;
            markerEnd?: string | undefined;
            sourceHandle?: string | undefined;
            targetHandle?: string | undefined;
            label?: string | undefined;
            labelStyle?: string | undefined;
            labelShowBg?: boolean | undefined;
            labelBgStyle?: string | undefined;
            labelBgPadding?: string | undefined;
            labelBgBorderRadius?: number | undefined;
            style?: string | undefined;
            animated?: boolean | undefined;
            hidden?: boolean | undefined;
            deletable?: boolean | undefined;
            focusable?: boolean | undefined;
            className?: string | undefined;
            sourceNode?: string | undefined;
            targetNode?: string | undefined;
            selected?: boolean | undefined;
            zIndex?: number | undefined;
            ariaLabel?: string | undefined;
            interactionWidth?: number | undefined;
            flowId: string;
            id: string;
        };
        _output_in: {
            versionId: number;
            data: string | null;
            sourceParentCode: string;
            targetParentCode: string;
            type: string | null;
            source: string;
            target: string;
            markerStart: string;
            markerEnd: string;
            sourceHandle: string | null;
            targetHandle: string | null;
            label: string | null;
            labelStyle: string | null;
            labelShowBg: boolean | null;
            labelBgStyle: string | null;
            labelBgPadding: string | null;
            labelBgBorderRadius: number | null;
            style: string | null;
            animated: boolean | null;
            hidden: boolean | null;
            deletable: boolean | null;
            focusable: boolean | null;
            className: string | null;
            sourceNode: string | null;
            targetNode: string | null;
            selected: boolean | null;
            zIndex: number | null;
            ariaLabel: string | null;
            interactionWidth: number | null;
            id: string;
            reactFlowId: string;
        };
        _output_out: {
            data: {
                content: string | null;
                sourceParentCode: string;
                targetParentCode: string;
                versionId: number;
            };
            id: string;
            versionId: number;
            sourceParentCode: string;
            targetParentCode: string;
            type: string | null;
            source: string;
            target: string;
            markerStart: string;
            markerEnd: string;
            sourceHandle: string | null;
            targetHandle: string | null;
            label: string | null;
            labelStyle: string | null;
            labelShowBg: boolean | null;
            labelBgStyle: string | null;
            labelBgPadding: string | null;
            labelBgBorderRadius: number | null;
            style: string | null;
            animated: boolean | null;
            hidden: boolean | null;
            deletable: boolean | null;
            focusable: boolean | null;
            className: string | null;
            sourceNode: string | null;
            targetNode: string | null;
            selected: boolean | null;
            zIndex: number | null;
            ariaLabel: string | null;
            interactionWidth: number | null;
            reactFlowId: string;
        };
    }, unknown>;
    editHidden: import("@trpc/server").BuildProcedure<"mutation", {
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
            value: boolean;
            ids: string[];
        };
        _input_out: {
            flowId: string;
            value: boolean;
            ids: string[];
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, void>;
    remove: import("@trpc/server").BuildProcedure<"mutation", {
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
            ids: string[];
        };
        _input_out: {
            flowId: string;
            ids: string[];
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, void>;
}>;
