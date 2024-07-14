/// <reference types="qs" />
/// <reference types="express" />
/// <reference types="node" />
/// <reference types="ws" />
export declare const apiRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
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
}>, {
    flows: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
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
                data?: {
                    duplicationErrors?: {
                        code: import("../../../..").duplicationErrorCode;
                        type: "message" | "sequence" | "action";
                        where: string;
                        what: string;
                        who: string;
                    }[] | undefined;
                    position?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    } | undefined;
                    zoom?: number | undefined;
                    publication?: {
                        versionId: number;
                        end: string;
                        start: string;
                    } | undefined;
                } | undefined;
                name?: string | undefined;
                machineId: number;
                whatsappApi: import("../../../..").whatsappApi;
            };
            _input_out: {
                data?: {
                    duplicationErrors?: {
                        code: import("../../../..").duplicationErrorCode;
                        type: "message" | "sequence" | "action";
                        where: string;
                        what: string;
                        who: string;
                    }[] | undefined;
                    position?: {
                        x: number;
                        y: number;
                    } | undefined;
                    zoom?: number | undefined;
                    publication?: {
                        versionId: number;
                        end: string;
                        start: string;
                    } | undefined;
                } | undefined;
                name?: string | undefined;
                machineId: number;
                whatsappApi: import("../../../..").whatsappApi;
            };
            _output_in: {
                data: string | null;
                status: string;
                id: string;
                name: string | null;
                machineId: number;
                whatsappApi: string;
                initialSequence: string | null;
                createdAt: Date;
                updatedAt: Date | null;
            };
            _output_out: {
                data: string | null;
                status: string;
                id: string;
                name: string | null;
                machineId: number;
                whatsappApi: string;
                initialSequence: string | null;
                createdAt: Date;
                updatedAt: Date | null;
            } | {
                data: {
                    duplicationErrors?: {
                        code: import("../../../..").duplicationErrorCode;
                        type: "message" | "sequence" | "action";
                        where: string;
                        what: string;
                        who: string;
                    }[] | undefined;
                    position?: {
                        x: number;
                        y: number;
                    } | undefined;
                    zoom?: number | undefined;
                    publication?: {
                        versionId: number;
                        end: string;
                        start: string;
                    } | undefined;
                };
                status: string;
                id: string;
                name: string | null;
                machineId: number;
                whatsappApi: string;
                initialSequence: string | null;
                createdAt: Date;
                updatedAt: Date | null;
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
                data?: {
                    duplicationErrors?: {
                        code: import("../../../..").duplicationErrorCode;
                        type: "message" | "sequence" | "action";
                        where: string;
                        what: string;
                        who: string;
                    }[] | undefined;
                    position?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    } | undefined;
                    zoom?: number | undefined;
                    publication?: {
                        versionId: number;
                        end: string;
                        start: string;
                    } | undefined;
                } | undefined;
                status?: import("../../../..").flowStatus | undefined;
                name?: string | undefined;
                id: string;
            };
            _input_out: {
                data?: {
                    duplicationErrors?: {
                        code: import("../../../..").duplicationErrorCode;
                        type: "message" | "sequence" | "action";
                        where: string;
                        what: string;
                        who: string;
                    }[] | undefined;
                    position?: {
                        x: number;
                        y: number;
                    } | undefined;
                    zoom?: number | undefined;
                    publication?: {
                        versionId: number;
                        end: string;
                        start: string;
                    } | undefined;
                } | undefined;
                status?: import("../../../..").flowStatus | undefined;
                name?: string | undefined;
                id: string;
            };
            _output_in: {
                data: string | null;
                status: string;
                id: string;
                name: string | null;
                machineId: number;
                whatsappApi: string;
                initialSequence: string | null;
                createdAt: Date;
                updatedAt: Date | null;
            };
            _output_out: {
                data: string | null;
                status: string;
                id: string;
                name: string | null;
                machineId: number;
                whatsappApi: string;
                initialSequence: string | null;
                createdAt: Date;
                updatedAt: Date | null;
            } | {
                data: {
                    duplicationErrors?: {
                        code: import("../../../..").duplicationErrorCode;
                        type: "message" | "sequence" | "action";
                        where: string;
                        what: string;
                        who: string;
                    }[] | undefined;
                    position?: {
                        x: number;
                        y: number;
                    } | undefined;
                    zoom?: number | undefined;
                    publication?: {
                        versionId: number;
                        end: string;
                        start: string;
                    } | undefined;
                };
                status: string;
                id: string;
                name: string | null;
                machineId: number;
                whatsappApi: string;
                initialSequence: string | null;
                createdAt: Date;
                updatedAt: Date | null;
            };
        }, unknown>;
        listByMachineId: import("@trpc/server").BuildProcedure<"query", {
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
                edges?: {
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
                }[] | undefined;
                nodes?: {
                    height?: number | null | undefined;
                    width?: number | null | undefined;
                    versionId: number;
                    data: string;
                    type: string | null;
                    status: string;
                    style: string | null;
                    hidden: boolean | null;
                    deletable: boolean | null;
                    focusable: boolean | null;
                    className: string | null;
                    selected: boolean | null;
                    zIndex: number | null;
                    ariaLabel: string | null;
                    id: string;
                    reactFlowId: string;
                    leadloversId: number | null;
                    parentNode: string | null;
                    position: string;
                    draggable: boolean | null;
                    targetPosition: string | null;
                    sourcePosition: string | null;
                    dragging: boolean | null;
                    selectable: boolean | null;
                    connectable: boolean | null;
                    dragHandle: string | null;
                    extent: string | null;
                    expandParent: boolean | null;
                    positionAbsolute: string | null;
                }[] | undefined;
                data: string | null;
                status: string;
                id: string;
                name: string | null;
                machineId: number;
                whatsappApi: string;
                initialSequence: string | null;
                createdAt: Date;
                updatedAt: Date | null;
            };
            _output_out: {
                nodes: {
                    [k: string]: string | number | boolean | {
                        message?: {
                            timer: {
                                weekdays: string;
                                taskFixedDate?: {
                                    day: string;
                                    month: string;
                                    year: string;
                                } | undefined;
                                timeToNextMessage: {
                                    days: string;
                                    hours: string;
                                    minutes: string;
                                    seconds: string;
                                };
                                initialSendingHour: {
                                    hour: string;
                                    minute: string;
                                };
                                finalSendingHour: {
                                    hour: string;
                                    minute: string;
                                };
                            };
                            openMessage?: {
                                buttons?: {
                                    id: string;
                                    text: string;
                                    url: string;
                                }[] | undefined;
                                buttonCta?: {
                                    text: string;
                                    url: string;
                                } | undefined;
                                attachments?: {
                                    type: string;
                                    id: string;
                                    url: string;
                                    name: string;
                                }[] | undefined;
                                audios?: {
                                    type: string;
                                    id: string;
                                    url: string;
                                    name: string;
                                    size: number;
                                }[] | undefined;
                                contacts?: number[] | undefined;
                                messagesToForward?: string[] | undefined;
                                linksPreview?: {
                                    linkId: string;
                                    title: string;
                                    description: string;
                                    body: string;
                                    link: string;
                                }[] | undefined;
                                text: string;
                                enableLinkPreview: boolean;
                                keepOriginalLink: boolean;
                            } | undefined;
                            templateMessage?: {
                                buttons?: {
                                    id: string;
                                    text: string;
                                    url: string;
                                }[] | undefined;
                                hasAttachments?: "video" | "image" | "document" | undefined;
                                id: string;
                                text: string;
                                name: string;
                                tags: {
                                    value: string;
                                    id: string;
                                    name: string;
                                }[];
                            } | undefined;
                            labels?: {
                                type: string;
                                id: string;
                            }[] | undefined;
                            type: import("../../../..").messageType;
                            name: string;
                            machineId: number;
                            height: number;
                            active: boolean;
                        } | undefined;
                        versionId?: number | undefined;
                        sequence?: {
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
                        } | undefined;
                        reply?: {
                            messageId: string;
                            childrenReplyTrigger: string[];
                        } | undefined;
                        trigger?: {
                            timer?: {
                                days: number;
                                hours: number;
                                minutes: number;
                            } | undefined;
                            active?: boolean | undefined;
                            duplicationErrors?: {
                                where: "actions";
                                what: string;
                            }[] | undefined;
                            buttonId?: string | undefined;
                            answer?: string | undefined;
                            filters?: {
                                score?: number | undefined;
                                tagId?: number | undefined;
                                closeWindow?: boolean | undefined;
                                tagOperatorAnd?: boolean | undefined;
                                type: number;
                            }[] | undefined;
                            sequenceId: string;
                            machineId: number;
                            height: number;
                            messageId: string;
                            actions: {
                                matchConditionals?: boolean | undefined;
                                tagsToApply?: {
                                    id: number;
                                    name: string;
                                }[] | undefined;
                                tagsToRemove?: {
                                    id: number;
                                    name: string;
                                }[] | undefined;
                                score?: number | undefined;
                                move?: {
                                    message?: {
                                        nodeId?: string | undefined;
                                        index?: number | undefined;
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    machine: {
                                        id: number;
                                        name: string;
                                    };
                                    funnel: {
                                        nodeId?: string | undefined;
                                        id: number;
                                        name: string;
                                    };
                                } | undefined;
                                assign?: {
                                    id: number;
                                    name: string;
                                    to: "attendant" | "team";
                                } | undefined;
                                field?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                product?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                crm?: {
                                    board?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    column?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    group?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                } | undefined;
                                type: import("../../../..").actionType;
                                id: string;
                            }[];
                            teste: boolean;
                            event: import("../../../..").eventType;
                        } | undefined;
                    } | {
                        x: number;
                        y: number;
                    } | null;
                }[] | undefined;
                edges?: {
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
                }[] | undefined;
                data: string | null;
                status: string;
                id: string;
                name: string | null;
                machineId: number;
                whatsappApi: string;
                initialSequence: string | null;
                createdAt: Date;
                updatedAt: Date | null;
            } | {
                nodes: {
                    [k: string]: string | number | boolean | {
                        message?: {
                            timer: {
                                weekdays: string;
                                taskFixedDate?: {
                                    day: string;
                                    month: string;
                                    year: string;
                                } | undefined;
                                timeToNextMessage: {
                                    days: string;
                                    hours: string;
                                    minutes: string;
                                    seconds: string;
                                };
                                initialSendingHour: {
                                    hour: string;
                                    minute: string;
                                };
                                finalSendingHour: {
                                    hour: string;
                                    minute: string;
                                };
                            };
                            openMessage?: {
                                buttons?: {
                                    id: string;
                                    text: string;
                                    url: string;
                                }[] | undefined;
                                buttonCta?: {
                                    text: string;
                                    url: string;
                                } | undefined;
                                attachments?: {
                                    type: string;
                                    id: string;
                                    url: string;
                                    name: string;
                                }[] | undefined;
                                audios?: {
                                    type: string;
                                    id: string;
                                    url: string;
                                    name: string;
                                    size: number;
                                }[] | undefined;
                                contacts?: number[] | undefined;
                                messagesToForward?: string[] | undefined;
                                linksPreview?: {
                                    linkId: string;
                                    title: string;
                                    description: string;
                                    body: string;
                                    link: string;
                                }[] | undefined;
                                text: string;
                                enableLinkPreview: boolean;
                                keepOriginalLink: boolean;
                            } | undefined;
                            templateMessage?: {
                                buttons?: {
                                    id: string;
                                    text: string;
                                    url: string;
                                }[] | undefined;
                                hasAttachments?: "video" | "image" | "document" | undefined;
                                id: string;
                                text: string;
                                name: string;
                                tags: {
                                    value: string;
                                    id: string;
                                    name: string;
                                }[];
                            } | undefined;
                            labels?: {
                                type: string;
                                id: string;
                            }[] | undefined;
                            type: import("../../../..").messageType;
                            name: string;
                            machineId: number;
                            height: number;
                            active: boolean;
                        } | undefined;
                        versionId?: number | undefined;
                        sequence?: {
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
                        } | undefined;
                        reply?: {
                            messageId: string;
                            childrenReplyTrigger: string[];
                        } | undefined;
                        trigger?: {
                            timer?: {
                                days: number;
                                hours: number;
                                minutes: number;
                            } | undefined;
                            active?: boolean | undefined;
                            duplicationErrors?: {
                                where: "actions";
                                what: string;
                            }[] | undefined;
                            buttonId?: string | undefined;
                            answer?: string | undefined;
                            filters?: {
                                score?: number | undefined;
                                tagId?: number | undefined;
                                closeWindow?: boolean | undefined;
                                tagOperatorAnd?: boolean | undefined;
                                type: number;
                            }[] | undefined;
                            sequenceId: string;
                            machineId: number;
                            height: number;
                            messageId: string;
                            actions: {
                                matchConditionals?: boolean | undefined;
                                tagsToApply?: {
                                    id: number;
                                    name: string;
                                }[] | undefined;
                                tagsToRemove?: {
                                    id: number;
                                    name: string;
                                }[] | undefined;
                                score?: number | undefined;
                                move?: {
                                    message?: {
                                        nodeId?: string | undefined;
                                        index?: number | undefined;
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    machine: {
                                        id: number;
                                        name: string;
                                    };
                                    funnel: {
                                        nodeId?: string | undefined;
                                        id: number;
                                        name: string;
                                    };
                                } | undefined;
                                assign?: {
                                    id: number;
                                    name: string;
                                    to: "attendant" | "team";
                                } | undefined;
                                field?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                product?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                crm?: {
                                    board?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    column?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    group?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                } | undefined;
                                type: import("../../../..").actionType;
                                id: string;
                            }[];
                            teste: boolean;
                            event: import("../../../..").eventType;
                        } | undefined;
                    } | {
                        x: number;
                        y: number;
                    } | null;
                }[] | undefined;
                data: {
                    duplicationErrors?: {
                        code: import("../../../..").duplicationErrorCode;
                        type: "message" | "sequence" | "action";
                        where: string;
                        what: string;
                        who: string;
                    }[] | undefined;
                    position?: {
                        x: number;
                        y: number;
                    } | undefined;
                    zoom?: number | undefined;
                    publication?: {
                        versionId: number;
                        end: string;
                        start: string;
                    } | undefined;
                };
                edges?: {
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
                }[] | undefined;
                status: string;
                id: string;
                name: string | null;
                machineId: number;
                whatsappApi: string;
                initialSequence: string | null;
                createdAt: Date;
                updatedAt: Date | null;
            };
        }, unknown>;
        listSequencesAndMessages: import("@trpc/server").BuildProcedure<"query", {
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
                text?: string | undefined;
                parentNode?: string | undefined;
                type: "message" | "sequence";
                id: string;
                name: string;
            }[];
            _output_out: {
                text?: string | undefined;
                parentNode?: string | undefined;
                type: "message" | "sequence";
                id: string;
                name: string;
            }[];
        }, unknown>;
        setInitialSequence: import("@trpc/server").BuildProcedure<"mutation", {
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
            };
            _input_out: {
                flowId: string;
                sequenceId: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, void>;
        uploadFile: import("@trpc/server").BuildProcedure<"mutation", {
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
                files: {
                    type?: import("../../../..").mediaType | undefined;
                    decodedBuffer?: any;
                    sizeInBytes?: number | undefined;
                    base64: string;
                    name: string;
                }[];
            };
            _input_out: {
                flowId: string;
                files: {
                    type?: import("../../../..").mediaType | undefined;
                    decodedBuffer?: any;
                    sizeInBytes?: number | undefined;
                    base64: string;
                    name: string;
                }[];
            };
            _output_in: {
                urls: string[];
            };
            _output_out: {
                urls: string[];
            };
        }, unknown>;
        viewByVersionId: import("@trpc/server").BuildProcedure<"query", {
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
                versionId: number;
            };
            _input_out: {
                flowId: string;
                versionId: number;
            };
            _output_in: {
                edges: {
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
                }[];
                nodes: {
                    height?: number | null | undefined;
                    width?: number | null | undefined;
                    childNodes?: {
                        height?: number | null | undefined;
                        width?: number | null | undefined;
                        versionId: number;
                        data: string;
                        type: string | null;
                        status: string;
                        style: string | null;
                        hidden: boolean | null;
                        deletable: boolean | null;
                        focusable: boolean | null;
                        className: string | null;
                        selected: boolean | null;
                        zIndex: number | null;
                        ariaLabel: string | null;
                        id: string;
                        reactFlowId: string;
                        leadloversId: number | null;
                        parentNode: string | null;
                        position: string;
                        draggable: boolean | null;
                        targetPosition: string | null;
                        sourcePosition: string | null;
                        dragging: boolean | null;
                        selectable: boolean | null;
                        connectable: boolean | null;
                        dragHandle: string | null;
                        extent: string | null;
                        expandParent: boolean | null;
                        positionAbsolute: string | null;
                    }[] | undefined;
                    edges?: {
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
                    }[] | undefined;
                    versionId: number;
                    data: string;
                    type: string | null;
                    status: string;
                    style: string | null;
                    hidden: boolean | null;
                    deletable: boolean | null;
                    focusable: boolean | null;
                    className: string | null;
                    selected: boolean | null;
                    zIndex: number | null;
                    ariaLabel: string | null;
                    id: string;
                    reactFlowId: string;
                    leadloversId: number | null;
                    parentNode: string | null;
                    position: string;
                    draggable: boolean | null;
                    targetPosition: string | null;
                    sourcePosition: string | null;
                    dragging: boolean | null;
                    selectable: boolean | null;
                    connectable: boolean | null;
                    dragHandle: string | null;
                    extent: string | null;
                    expandParent: boolean | null;
                    positionAbsolute: string | null;
                }[];
            };
            _output_out: {
                edges: {
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
                }[];
                nodes: {
                    [k: string]: string | number | boolean | {
                        message?: {
                            timer: {
                                weekdays: string;
                                taskFixedDate?: {
                                    day: string;
                                    month: string;
                                    year: string;
                                } | undefined;
                                timeToNextMessage: {
                                    days: string;
                                    hours: string;
                                    minutes: string;
                                    seconds: string;
                                };
                                initialSendingHour: {
                                    hour: string;
                                    minute: string;
                                };
                                finalSendingHour: {
                                    hour: string;
                                    minute: string;
                                };
                            };
                            openMessage?: {
                                buttons?: {
                                    id: string;
                                    text: string;
                                    url: string;
                                }[] | undefined;
                                buttonCta?: {
                                    text: string;
                                    url: string;
                                } | undefined;
                                attachments?: {
                                    type: string;
                                    id: string;
                                    url: string;
                                    name: string;
                                }[] | undefined;
                                audios?: {
                                    type: string;
                                    id: string;
                                    url: string;
                                    name: string;
                                    size: number;
                                }[] | undefined;
                                contacts?: number[] | undefined;
                                messagesToForward?: string[] | undefined;
                                linksPreview?: {
                                    linkId: string;
                                    title: string;
                                    description: string;
                                    body: string;
                                    link: string;
                                }[] | undefined;
                                text: string;
                                enableLinkPreview: boolean;
                                keepOriginalLink: boolean;
                            } | undefined;
                            templateMessage?: {
                                buttons?: {
                                    id: string;
                                    text: string;
                                    url: string;
                                }[] | undefined;
                                hasAttachments?: "video" | "image" | "document" | undefined;
                                id: string;
                                text: string;
                                name: string;
                                tags: {
                                    value: string;
                                    id: string;
                                    name: string;
                                }[];
                            } | undefined;
                            labels?: {
                                type: string;
                                id: string;
                            }[] | undefined;
                            type: import("../../../..").messageType;
                            name: string;
                            machineId: number;
                            height: number;
                            active: boolean;
                        } | undefined;
                        versionId?: number | undefined;
                        sequence?: {
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
                        } | undefined;
                        reply?: {
                            messageId: string;
                            childrenReplyTrigger: string[];
                        } | undefined;
                        trigger?: {
                            timer?: {
                                days: number;
                                hours: number;
                                minutes: number;
                            } | undefined;
                            active?: boolean | undefined;
                            duplicationErrors?: {
                                where: "actions";
                                what: string;
                            }[] | undefined;
                            buttonId?: string | undefined;
                            answer?: string | undefined;
                            filters?: {
                                score?: number | undefined;
                                tagId?: number | undefined;
                                closeWindow?: boolean | undefined;
                                tagOperatorAnd?: boolean | undefined;
                                type: number;
                            }[] | undefined;
                            sequenceId: string;
                            machineId: number;
                            height: number;
                            messageId: string;
                            actions: {
                                matchConditionals?: boolean | undefined;
                                tagsToApply?: {
                                    id: number;
                                    name: string;
                                }[] | undefined;
                                tagsToRemove?: {
                                    id: number;
                                    name: string;
                                }[] | undefined;
                                score?: number | undefined;
                                move?: {
                                    message?: {
                                        nodeId?: string | undefined;
                                        index?: number | undefined;
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    machine: {
                                        id: number;
                                        name: string;
                                    };
                                    funnel: {
                                        nodeId?: string | undefined;
                                        id: number;
                                        name: string;
                                    };
                                } | undefined;
                                assign?: {
                                    id: number;
                                    name: string;
                                    to: "attendant" | "team";
                                } | undefined;
                                field?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                product?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                crm?: {
                                    board?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    column?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    group?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                } | undefined;
                                type: import("../../../..").actionType;
                                id: string;
                            }[];
                            teste: boolean;
                            event: import("../../../..").eventType;
                        } | undefined;
                    } | {
                        x: number;
                        y: number;
                    } | {
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
                    }[] | {
                        height?: number | null | undefined;
                        width?: number | null | undefined;
                        versionId: number;
                        data: string;
                        type: string | null;
                        status: string;
                        style: string | null;
                        hidden: boolean | null;
                        deletable: boolean | null;
                        focusable: boolean | null;
                        className: string | null;
                        selected: boolean | null;
                        zIndex: number | null;
                        ariaLabel: string | null;
                        id: string;
                        reactFlowId: string;
                        leadloversId: number | null;
                        parentNode: string | null;
                        position: string;
                        draggable: boolean | null;
                        targetPosition: string | null;
                        sourcePosition: string | null;
                        dragging: boolean | null;
                        selectable: boolean | null;
                        connectable: boolean | null;
                        dragHandle: string | null;
                        extent: string | null;
                        expandParent: boolean | null;
                        positionAbsolute: string | null;
                    }[] | null;
                }[];
            };
        }, unknown>;
        restoreByVersionId: import("@trpc/server").BuildProcedure<"query", {
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
                versionId: number;
            };
            _input_out: {
                flowId: string;
                versionId: number;
            };
            _output_in: {
                edges: {
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
                }[];
                nodes: {
                    height?: number | null | undefined;
                    width?: number | null | undefined;
                    childNodes?: {
                        height?: number | null | undefined;
                        width?: number | null | undefined;
                        versionId: number;
                        data: string;
                        type: string | null;
                        status: string;
                        style: string | null;
                        hidden: boolean | null;
                        deletable: boolean | null;
                        focusable: boolean | null;
                        className: string | null;
                        selected: boolean | null;
                        zIndex: number | null;
                        ariaLabel: string | null;
                        id: string;
                        reactFlowId: string;
                        leadloversId: number | null;
                        parentNode: string | null;
                        position: string;
                        draggable: boolean | null;
                        targetPosition: string | null;
                        sourcePosition: string | null;
                        dragging: boolean | null;
                        selectable: boolean | null;
                        connectable: boolean | null;
                        dragHandle: string | null;
                        extent: string | null;
                        expandParent: boolean | null;
                        positionAbsolute: string | null;
                    }[] | undefined;
                    edges?: {
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
                    }[] | undefined;
                    versionId: number;
                    data: string;
                    type: string | null;
                    status: string;
                    style: string | null;
                    hidden: boolean | null;
                    deletable: boolean | null;
                    focusable: boolean | null;
                    className: string | null;
                    selected: boolean | null;
                    zIndex: number | null;
                    ariaLabel: string | null;
                    id: string;
                    reactFlowId: string;
                    leadloversId: number | null;
                    parentNode: string | null;
                    position: string;
                    draggable: boolean | null;
                    targetPosition: string | null;
                    sourcePosition: string | null;
                    dragging: boolean | null;
                    selectable: boolean | null;
                    connectable: boolean | null;
                    dragHandle: string | null;
                    extent: string | null;
                    expandParent: boolean | null;
                    positionAbsolute: string | null;
                }[];
            };
            _output_out: {
                edges: {
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
                }[];
                nodes: {
                    [k: string]: string | number | boolean | {
                        message?: {
                            timer: {
                                weekdays: string;
                                taskFixedDate?: {
                                    day: string;
                                    month: string;
                                    year: string;
                                } | undefined;
                                timeToNextMessage: {
                                    days: string;
                                    hours: string;
                                    minutes: string;
                                    seconds: string;
                                };
                                initialSendingHour: {
                                    hour: string;
                                    minute: string;
                                };
                                finalSendingHour: {
                                    hour: string;
                                    minute: string;
                                };
                            };
                            openMessage?: {
                                buttons?: {
                                    id: string;
                                    text: string;
                                    url: string;
                                }[] | undefined;
                                buttonCta?: {
                                    text: string;
                                    url: string;
                                } | undefined;
                                attachments?: {
                                    type: string;
                                    id: string;
                                    url: string;
                                    name: string;
                                }[] | undefined;
                                audios?: {
                                    type: string;
                                    id: string;
                                    url: string;
                                    name: string;
                                    size: number;
                                }[] | undefined;
                                contacts?: number[] | undefined;
                                messagesToForward?: string[] | undefined;
                                linksPreview?: {
                                    linkId: string;
                                    title: string;
                                    description: string;
                                    body: string;
                                    link: string;
                                }[] | undefined;
                                text: string;
                                enableLinkPreview: boolean;
                                keepOriginalLink: boolean;
                            } | undefined;
                            templateMessage?: {
                                buttons?: {
                                    id: string;
                                    text: string;
                                    url: string;
                                }[] | undefined;
                                hasAttachments?: "video" | "image" | "document" | undefined;
                                id: string;
                                text: string;
                                name: string;
                                tags: {
                                    value: string;
                                    id: string;
                                    name: string;
                                }[];
                            } | undefined;
                            labels?: {
                                type: string;
                                id: string;
                            }[] | undefined;
                            type: import("../../../..").messageType;
                            name: string;
                            machineId: number;
                            height: number;
                            active: boolean;
                        } | undefined;
                        versionId?: number | undefined;
                        sequence?: {
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
                        } | undefined;
                        reply?: {
                            messageId: string;
                            childrenReplyTrigger: string[];
                        } | undefined;
                        trigger?: {
                            timer?: {
                                days: number;
                                hours: number;
                                minutes: number;
                            } | undefined;
                            active?: boolean | undefined;
                            duplicationErrors?: {
                                where: "actions";
                                what: string;
                            }[] | undefined;
                            buttonId?: string | undefined;
                            answer?: string | undefined;
                            filters?: {
                                score?: number | undefined;
                                tagId?: number | undefined;
                                closeWindow?: boolean | undefined;
                                tagOperatorAnd?: boolean | undefined;
                                type: number;
                            }[] | undefined;
                            sequenceId: string;
                            machineId: number;
                            height: number;
                            messageId: string;
                            actions: {
                                matchConditionals?: boolean | undefined;
                                tagsToApply?: {
                                    id: number;
                                    name: string;
                                }[] | undefined;
                                tagsToRemove?: {
                                    id: number;
                                    name: string;
                                }[] | undefined;
                                score?: number | undefined;
                                move?: {
                                    message?: {
                                        nodeId?: string | undefined;
                                        index?: number | undefined;
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    machine: {
                                        id: number;
                                        name: string;
                                    };
                                    funnel: {
                                        nodeId?: string | undefined;
                                        id: number;
                                        name: string;
                                    };
                                } | undefined;
                                assign?: {
                                    id: number;
                                    name: string;
                                    to: "attendant" | "team";
                                } | undefined;
                                field?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                product?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                crm?: {
                                    board?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    column?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    group?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                } | undefined;
                                type: import("../../../..").actionType;
                                id: string;
                            }[];
                            teste: boolean;
                            event: import("../../../..").eventType;
                        } | undefined;
                    } | {
                        x: number;
                        y: number;
                    } | {
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
                    }[] | {
                        height?: number | null | undefined;
                        width?: number | null | undefined;
                        versionId: number;
                        data: string;
                        type: string | null;
                        status: string;
                        style: string | null;
                        hidden: boolean | null;
                        deletable: boolean | null;
                        focusable: boolean | null;
                        className: string | null;
                        selected: boolean | null;
                        zIndex: number | null;
                        ariaLabel: string | null;
                        id: string;
                        reactFlowId: string;
                        leadloversId: number | null;
                        parentNode: string | null;
                        position: string;
                        draggable: boolean | null;
                        targetPosition: string | null;
                        sourcePosition: string | null;
                        dragging: boolean | null;
                        selectable: boolean | null;
                        connectable: boolean | null;
                        dragHandle: string | null;
                        extent: string | null;
                        expandParent: boolean | null;
                        positionAbsolute: string | null;
                    }[] | null;
                }[];
            };
        }, unknown>;
        publish: import("@trpc/server").BuildProcedure<"mutation", {
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
                status: string;
                start: string;
            };
            _output_out: {
                status: string;
                start: string;
            };
        }, unknown>;
        publishFromLeadlovers: import("@trpc/server").BuildProcedure<"mutation", {
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
                whatsappApi: boolean;
                fromMachineId: number;
                toMachineId: number;
            };
            _input_out: {
                whatsappApi: boolean;
                fromMachineId: number;
                toMachineId: number;
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
        monitorStatus: import("@trpc/server").BuildProcedure<"subscription", {
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
            _meta: object;
            _ctx_out: {
                req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>> | import("http").IncomingMessage;
                res: import("express").Response<any, Record<string, any>> | import("ws");
                user: {
                    key: string;
                } | undefined;
            };
            _input_in: {
                flowId: string;
            };
            _input_out: {
                flowId: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import("@trpc/server/observable").Observable<{
            flowId: string;
            status: import("../../../..").flowStatus;
            time: string;
        }, unknown>>;
        checkWhatsappAuthentication: import("@trpc/server").BuildProcedure<"mutation", {
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
                isCloudApi: boolean;
                authentication: import("../../../..").whatsappApi.CLOUD_API | import("../../../..").whatsappApi.QRCODE;
            };
            _output_out: {
                isCloudApi: boolean;
                authentication: import("../../../..").whatsappApi.CLOUD_API | import("../../../..").whatsappApi.QRCODE;
            };
        }, unknown>;
    }>;
    versions: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
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
    nodes: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
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
                style?: string | undefined;
                hidden?: boolean | undefined;
                deletable?: boolean | undefined;
                focusable?: boolean | undefined;
                className?: string | undefined;
                selected?: boolean | undefined;
                zIndex?: number | undefined;
                ariaLabel?: string | undefined;
                height?: number | undefined;
                parentNode?: string | undefined;
                draggable?: boolean | undefined;
                targetPosition?: "left" | "right" | "top" | "bottom" | undefined;
                sourcePosition?: "left" | "right" | "top" | "bottom" | undefined;
                dragging?: boolean | undefined;
                selectable?: boolean | undefined;
                connectable?: boolean | undefined;
                dragHandle?: string | undefined;
                width?: number | undefined;
                extent?: string | undefined;
                expandParent?: boolean | undefined;
                positionAbsolute?: string | undefined;
                flowId: string;
                data: {
                    message?: {
                        height?: number | undefined;
                        timer?: {
                            taskFixedDate?: {
                                day: string;
                                month: string;
                                year: string;
                            } | undefined;
                            timeToNextMessage: {
                                days: string;
                                hours: string;
                                minutes: string;
                                seconds: string;
                            };
                            initialSendingHour: {
                                hour: string;
                                minute: string;
                            };
                            finalSendingHour: {
                                hour: string;
                                minute: string;
                            };
                            weekdays: string;
                        } | undefined;
                        active?: boolean | undefined;
                        openMessage?: {
                            enableLinkPreview?: boolean | undefined;
                            keepOriginalLink?: boolean | undefined;
                            buttons?: {
                                url?: string | undefined;
                                id: string;
                                text: string;
                            }[] | undefined;
                            buttonCta?: {
                                text: string;
                                url: string;
                            } | undefined;
                            attachments?: {
                                type: string;
                                id: string;
                                url: string;
                                name: string;
                            }[] | undefined;
                            audios?: {
                                type: string;
                                id: string;
                                url: string;
                                name: string;
                                size: number;
                            }[] | undefined;
                            contacts?: number[] | undefined;
                            messagesToForward?: string[] | undefined;
                            linksPreview?: {
                                linkId: string;
                                title: string;
                                description: string;
                                body: string;
                                link: string;
                            }[] | undefined;
                            text: string;
                        } | undefined;
                        templateMessage?: {
                            buttons?: {
                                url?: string | undefined;
                                id: string;
                                text: string;
                            }[] | undefined;
                            hasAttachments?: "video" | "image" | "document" | undefined;
                            id: string;
                            text: string;
                            name: string;
                            tags: {
                                value?: string | undefined;
                                id: string;
                                name: string;
                            }[];
                        } | undefined;
                        labels?: {
                            type: string;
                            id: string;
                        }[] | undefined;
                        type: import("../../../..").messageType;
                        name: string;
                        machineId: number;
                    } | undefined;
                    sequence?: {
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
                    } | undefined;
                    reply?: {
                        messageId?: string | undefined;
                        childrenReplyTrigger?: string[] | undefined;
                    } | undefined;
                    trigger?: {
                        height?: number | undefined;
                        timer?: {
                            days?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        active?: boolean | undefined;
                        duplicationErrors?: {
                            where: "actions";
                            what: string;
                        }[] | undefined;
                        buttonId?: string | undefined;
                        answer?: string | undefined;
                        filters?: {
                            score?: number | undefined;
                            tagId?: number | undefined;
                            closeWindow?: boolean | undefined;
                            tagOperatorAnd?: boolean | undefined;
                            type: number;
                        }[] | undefined;
                        sequenceId: string;
                        machineId: number;
                        messageId: string;
                        actions: {
                            matchConditionals?: boolean | undefined;
                            tagsToApply?: {
                                id: number;
                                name: string;
                            }[] | undefined;
                            tagsToRemove?: {
                                id: number;
                                name: string;
                            }[] | undefined;
                            score?: number | undefined;
                            move?: {
                                message?: {
                                    id?: number | undefined;
                                    nodeId?: string | undefined;
                                    index?: number | undefined;
                                    name: string;
                                } | undefined;
                                machine: {
                                    id: number;
                                    name: string;
                                };
                                funnel: {
                                    id?: number | undefined;
                                    nodeId?: string | undefined;
                                    name: string;
                                };
                            } | undefined;
                            assign?: {
                                id: number;
                                name: string;
                                to: "attendant" | "team";
                            } | undefined;
                            field?: {
                                id: number;
                                name: string;
                            } | undefined;
                            product?: {
                                id: number;
                                name: string;
                            } | undefined;
                            crm?: {
                                board?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                column?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                group?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                            } | undefined;
                            type: import("../../../..").actionType;
                            id: string;
                        }[];
                        teste: boolean;
                        event: import("../../../..").eventType;
                    } | undefined;
                };
                type: import("../../../..").nodeType;
                id: string;
                position: {
                    x: number;
                    y: number;
                };
            };
            _input_out: {
                reactFlowId: string;
                style?: string | undefined;
                hidden?: boolean | undefined;
                deletable?: boolean | undefined;
                focusable?: boolean | undefined;
                className?: string | undefined;
                selected?: boolean | undefined;
                zIndex?: number | undefined;
                ariaLabel?: string | undefined;
                height?: number | undefined;
                parentNode?: string | undefined;
                draggable?: boolean | undefined;
                targetPosition?: "left" | "right" | "top" | "bottom" | undefined;
                sourcePosition?: "left" | "right" | "top" | "bottom" | undefined;
                dragging?: boolean | undefined;
                selectable?: boolean | undefined;
                connectable?: boolean | undefined;
                dragHandle?: string | undefined;
                width?: number | undefined;
                extent?: string | undefined;
                expandParent?: boolean | undefined;
                positionAbsolute?: string | undefined;
                flowId: string;
                data: {
                    message?: {
                        timer: {
                            weekdays: string;
                            taskFixedDate?: {
                                day: string;
                                month: string;
                                year: string;
                            } | undefined;
                            timeToNextMessage: {
                                days: string;
                                hours: string;
                                minutes: string;
                                seconds: string;
                            };
                            initialSendingHour: {
                                hour: string;
                                minute: string;
                            };
                            finalSendingHour: {
                                hour: string;
                                minute: string;
                            };
                        };
                        openMessage?: {
                            buttons?: {
                                id: string;
                                text: string;
                                url: string;
                            }[] | undefined;
                            buttonCta?: {
                                text: string;
                                url: string;
                            } | undefined;
                            attachments?: {
                                type: string;
                                id: string;
                                url: string;
                                name: string;
                            }[] | undefined;
                            audios?: {
                                type: string;
                                id: string;
                                url: string;
                                name: string;
                                size: number;
                            }[] | undefined;
                            contacts?: number[] | undefined;
                            messagesToForward?: string[] | undefined;
                            linksPreview?: {
                                linkId: string;
                                title: string;
                                description: string;
                                body: string;
                                link: string;
                            }[] | undefined;
                            text: string;
                            enableLinkPreview: boolean;
                            keepOriginalLink: boolean;
                        } | undefined;
                        templateMessage?: {
                            buttons?: {
                                id: string;
                                text: string;
                                url: string;
                            }[] | undefined;
                            hasAttachments?: "video" | "image" | "document" | undefined;
                            id: string;
                            text: string;
                            name: string;
                            tags: {
                                value: string;
                                id: string;
                                name: string;
                            }[];
                        } | undefined;
                        labels?: {
                            type: string;
                            id: string;
                        }[] | undefined;
                        type: import("../../../..").messageType;
                        name: string;
                        machineId: number;
                        height: number;
                        active: boolean;
                    } | undefined;
                    sequence?: {
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
                    } | undefined;
                    reply?: {
                        messageId: string;
                        childrenReplyTrigger: string[];
                    } | undefined;
                    trigger?: {
                        timer?: {
                            days: number;
                            hours: number;
                            minutes: number;
                        } | undefined;
                        active?: boolean | undefined;
                        duplicationErrors?: {
                            where: "actions";
                            what: string;
                        }[] | undefined;
                        buttonId?: string | undefined;
                        answer?: string | undefined;
                        filters?: {
                            score?: number | undefined;
                            tagId?: number | undefined;
                            closeWindow?: boolean | undefined;
                            tagOperatorAnd?: boolean | undefined;
                            type: number;
                        }[] | undefined;
                        sequenceId: string;
                        machineId: number;
                        height: number;
                        messageId: string;
                        actions: {
                            name?: string | undefined;
                            matchConditionals?: boolean | undefined;
                            score?: number | undefined;
                            move?: {
                                message?: {
                                    nodeId?: string | undefined;
                                    index?: number | undefined;
                                    id: number;
                                    name: string;
                                } | undefined;
                                machine: {
                                    id: number;
                                    name: string;
                                };
                                funnel: {
                                    nodeId?: string | undefined;
                                    id: number;
                                    name: string;
                                };
                            } | undefined;
                            assign?: {
                                id: number;
                                name: string;
                                to: "attendant" | "team";
                            } | undefined;
                            field?: {
                                id: number;
                                name: string;
                            } | undefined;
                            product?: {
                                id: number;
                                name: string;
                            } | undefined;
                            crm?: {
                                board?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                column?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                group?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                            } | undefined;
                            tag?: number | undefined;
                            actionReactFlowId?: string | undefined;
                            leadloversId?: number | undefined;
                            type: import("../../../..").actionType;
                            id: string;
                        }[];
                        teste: boolean;
                        event: import("../../../..").eventType;
                    } | undefined;
                };
                type: import("../../../..").nodeType;
                id: string;
                position: {
                    x: number;
                    y: number;
                };
            };
            _output_in: {
                height?: number | null | undefined;
                width?: number | null | undefined;
                versionId: number;
                data: string;
                type: string | null;
                status: string;
                style: string | null;
                hidden: boolean | null;
                deletable: boolean | null;
                focusable: boolean | null;
                className: string | null;
                selected: boolean | null;
                zIndex: number | null;
                ariaLabel: string | null;
                id: string;
                reactFlowId: string;
                leadloversId: number | null;
                parentNode: string | null;
                position: string;
                draggable: boolean | null;
                targetPosition: string | null;
                sourcePosition: string | null;
                dragging: boolean | null;
                selectable: boolean | null;
                connectable: boolean | null;
                dragHandle: string | null;
                extent: string | null;
                expandParent: boolean | null;
                positionAbsolute: string | null;
            };
            _output_out: {
                [k: string]: string | number | boolean | {
                    message?: {
                        timer: {
                            weekdays: string;
                            taskFixedDate?: {
                                day: string;
                                month: string;
                                year: string;
                            } | undefined;
                            timeToNextMessage: {
                                days: string;
                                hours: string;
                                minutes: string;
                                seconds: string;
                            };
                            initialSendingHour: {
                                hour: string;
                                minute: string;
                            };
                            finalSendingHour: {
                                hour: string;
                                minute: string;
                            };
                        };
                        openMessage?: {
                            buttons?: {
                                id: string;
                                text: string;
                                url: string;
                            }[] | undefined;
                            buttonCta?: {
                                text: string;
                                url: string;
                            } | undefined;
                            attachments?: {
                                type: string;
                                id: string;
                                url: string;
                                name: string;
                            }[] | undefined;
                            audios?: {
                                type: string;
                                id: string;
                                url: string;
                                name: string;
                                size: number;
                            }[] | undefined;
                            contacts?: number[] | undefined;
                            messagesToForward?: string[] | undefined;
                            linksPreview?: {
                                linkId: string;
                                title: string;
                                description: string;
                                body: string;
                                link: string;
                            }[] | undefined;
                            text: string;
                            enableLinkPreview: boolean;
                            keepOriginalLink: boolean;
                        } | undefined;
                        templateMessage?: {
                            buttons?: {
                                id: string;
                                text: string;
                                url: string;
                            }[] | undefined;
                            hasAttachments?: "video" | "image" | "document" | undefined;
                            id: string;
                            text: string;
                            name: string;
                            tags: {
                                value: string;
                                id: string;
                                name: string;
                            }[];
                        } | undefined;
                        labels?: {
                            type: string;
                            id: string;
                        }[] | undefined;
                        type: import("../../../..").messageType;
                        name: string;
                        machineId: number;
                        height: number;
                        active: boolean;
                    } | undefined;
                    versionId?: number | undefined;
                    sequence?: {
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
                    } | undefined;
                    reply?: {
                        messageId: string;
                        childrenReplyTrigger: string[];
                    } | undefined;
                    trigger?: {
                        timer?: {
                            days: number;
                            hours: number;
                            minutes: number;
                        } | undefined;
                        active?: boolean | undefined;
                        duplicationErrors?: {
                            where: "actions";
                            what: string;
                        }[] | undefined;
                        buttonId?: string | undefined;
                        answer?: string | undefined;
                        filters?: {
                            score?: number | undefined;
                            tagId?: number | undefined;
                            closeWindow?: boolean | undefined;
                            tagOperatorAnd?: boolean | undefined;
                            type: number;
                        }[] | undefined;
                        sequenceId: string;
                        machineId: number;
                        height: number;
                        messageId: string;
                        actions: {
                            matchConditionals?: boolean | undefined;
                            tagsToApply?: {
                                id: number;
                                name: string;
                            }[] | undefined;
                            tagsToRemove?: {
                                id: number;
                                name: string;
                            }[] | undefined;
                            score?: number | undefined;
                            move?: {
                                message?: {
                                    nodeId?: string | undefined;
                                    index?: number | undefined;
                                    id: number;
                                    name: string;
                                } | undefined;
                                machine: {
                                    id: number;
                                    name: string;
                                };
                                funnel: {
                                    nodeId?: string | undefined;
                                    id: number;
                                    name: string;
                                };
                            } | undefined;
                            assign?: {
                                id: number;
                                name: string;
                                to: "attendant" | "team";
                            } | undefined;
                            field?: {
                                id: number;
                                name: string;
                            } | undefined;
                            product?: {
                                id: number;
                                name: string;
                            } | undefined;
                            crm?: {
                                board?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                column?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                group?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                            } | undefined;
                            type: import("../../../..").actionType;
                            id: string;
                        }[];
                        teste: boolean;
                        event: import("../../../..").eventType;
                    } | undefined;
                } | {
                    x: number;
                    y: number;
                } | null;
            };
        }, unknown>;
        createMany: import("@trpc/server").BuildProcedure<"mutation", {
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
                edges: {
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
                    type: import("../../../..").edgeType;
                    source: string;
                    target: string;
                    id: string;
                }[];
                nodes: {
                    style?: string | undefined;
                    hidden?: boolean | undefined;
                    deletable?: boolean | undefined;
                    focusable?: boolean | undefined;
                    className?: string | undefined;
                    selected?: boolean | undefined;
                    zIndex?: number | undefined;
                    ariaLabel?: string | undefined;
                    height?: number | undefined;
                    parentNode?: string | undefined;
                    draggable?: boolean | undefined;
                    targetPosition?: "left" | "right" | "top" | "bottom" | undefined;
                    sourcePosition?: "left" | "right" | "top" | "bottom" | undefined;
                    dragging?: boolean | undefined;
                    selectable?: boolean | undefined;
                    connectable?: boolean | undefined;
                    dragHandle?: string | undefined;
                    width?: number | undefined;
                    extent?: string | undefined;
                    expandParent?: boolean | undefined;
                    positionAbsolute?: string | undefined;
                    flowId: string;
                    data: {
                        message?: {
                            height?: number | undefined;
                            timer?: {
                                taskFixedDate?: {
                                    day: string;
                                    month: string;
                                    year: string;
                                } | undefined;
                                timeToNextMessage: {
                                    days: string;
                                    hours: string;
                                    minutes: string;
                                    seconds: string;
                                };
                                initialSendingHour: {
                                    hour: string;
                                    minute: string;
                                };
                                finalSendingHour: {
                                    hour: string;
                                    minute: string;
                                };
                                weekdays: string;
                            } | undefined;
                            active?: boolean | undefined;
                            openMessage?: {
                                enableLinkPreview?: boolean | undefined;
                                keepOriginalLink?: boolean | undefined;
                                buttons?: {
                                    url?: string | undefined;
                                    id: string;
                                    text: string;
                                }[] | undefined;
                                buttonCta?: {
                                    text: string;
                                    url: string;
                                } | undefined;
                                attachments?: {
                                    type: string;
                                    id: string;
                                    url: string;
                                    name: string;
                                }[] | undefined;
                                audios?: {
                                    type: string;
                                    id: string;
                                    url: string;
                                    name: string;
                                    size: number;
                                }[] | undefined;
                                contacts?: number[] | undefined;
                                messagesToForward?: string[] | undefined;
                                linksPreview?: {
                                    linkId: string;
                                    title: string;
                                    description: string;
                                    body: string;
                                    link: string;
                                }[] | undefined;
                                text: string;
                            } | undefined;
                            templateMessage?: {
                                buttons?: {
                                    url?: string | undefined;
                                    id: string;
                                    text: string;
                                }[] | undefined;
                                hasAttachments?: "video" | "image" | "document" | undefined;
                                id: string;
                                text: string;
                                name: string;
                                tags: {
                                    value?: string | undefined;
                                    id: string;
                                    name: string;
                                }[];
                            } | undefined;
                            labels?: {
                                type: string;
                                id: string;
                            }[] | undefined;
                            type: import("../../../..").messageType;
                            name: string;
                            machineId: number;
                        } | undefined;
                        sequence?: {
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
                        } | undefined;
                        reply?: {
                            messageId?: string | undefined;
                            childrenReplyTrigger?: string[] | undefined;
                        } | undefined;
                        trigger?: {
                            height?: number | undefined;
                            timer?: {
                                days?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            active?: boolean | undefined;
                            duplicationErrors?: {
                                where: "actions";
                                what: string;
                            }[] | undefined;
                            buttonId?: string | undefined;
                            answer?: string | undefined;
                            filters?: {
                                score?: number | undefined;
                                tagId?: number | undefined;
                                closeWindow?: boolean | undefined;
                                tagOperatorAnd?: boolean | undefined;
                                type: number;
                            }[] | undefined;
                            sequenceId: string;
                            machineId: number;
                            messageId: string;
                            actions: {
                                matchConditionals?: boolean | undefined;
                                tagsToApply?: {
                                    id: number;
                                    name: string;
                                }[] | undefined;
                                tagsToRemove?: {
                                    id: number;
                                    name: string;
                                }[] | undefined;
                                score?: number | undefined;
                                move?: {
                                    message?: {
                                        id?: number | undefined;
                                        nodeId?: string | undefined;
                                        index?: number | undefined;
                                        name: string;
                                    } | undefined;
                                    machine: {
                                        id: number;
                                        name: string;
                                    };
                                    funnel: {
                                        id?: number | undefined;
                                        nodeId?: string | undefined;
                                        name: string;
                                    };
                                } | undefined;
                                assign?: {
                                    id: number;
                                    name: string;
                                    to: "attendant" | "team";
                                } | undefined;
                                field?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                product?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                crm?: {
                                    board?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    column?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    group?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                } | undefined;
                                type: import("../../../..").actionType;
                                id: string;
                            }[];
                            teste: boolean;
                            event: import("../../../..").eventType;
                        } | undefined;
                    };
                    type: import("../../../..").nodeType;
                    id: string;
                    position: {
                        x: number;
                        y: number;
                    };
                }[];
            };
            _input_out: {
                flowId: string;
                edges: {
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
                    type: import("../../../..").edgeType;
                    source: string;
                    target: string;
                    markerStart: string;
                    markerEnd: string;
                    id: string;
                }[];
                nodes: {
                    reactFlowId: string;
                    style?: string | undefined;
                    hidden?: boolean | undefined;
                    deletable?: boolean | undefined;
                    focusable?: boolean | undefined;
                    className?: string | undefined;
                    selected?: boolean | undefined;
                    zIndex?: number | undefined;
                    ariaLabel?: string | undefined;
                    height?: number | undefined;
                    parentNode?: string | undefined;
                    draggable?: boolean | undefined;
                    targetPosition?: "left" | "right" | "top" | "bottom" | undefined;
                    sourcePosition?: "left" | "right" | "top" | "bottom" | undefined;
                    dragging?: boolean | undefined;
                    selectable?: boolean | undefined;
                    connectable?: boolean | undefined;
                    dragHandle?: string | undefined;
                    width?: number | undefined;
                    extent?: string | undefined;
                    expandParent?: boolean | undefined;
                    positionAbsolute?: string | undefined;
                    flowId: string;
                    data: {
                        message?: {
                            timer: {
                                weekdays: string;
                                taskFixedDate?: {
                                    day: string;
                                    month: string;
                                    year: string;
                                } | undefined;
                                timeToNextMessage: {
                                    days: string;
                                    hours: string;
                                    minutes: string;
                                    seconds: string;
                                };
                                initialSendingHour: {
                                    hour: string;
                                    minute: string;
                                };
                                finalSendingHour: {
                                    hour: string;
                                    minute: string;
                                };
                            };
                            openMessage?: {
                                buttons?: {
                                    id: string;
                                    text: string;
                                    url: string;
                                }[] | undefined;
                                buttonCta?: {
                                    text: string;
                                    url: string;
                                } | undefined;
                                attachments?: {
                                    type: string;
                                    id: string;
                                    url: string;
                                    name: string;
                                }[] | undefined;
                                audios?: {
                                    type: string;
                                    id: string;
                                    url: string;
                                    name: string;
                                    size: number;
                                }[] | undefined;
                                contacts?: number[] | undefined;
                                messagesToForward?: string[] | undefined;
                                linksPreview?: {
                                    linkId: string;
                                    title: string;
                                    description: string;
                                    body: string;
                                    link: string;
                                }[] | undefined;
                                text: string;
                                enableLinkPreview: boolean;
                                keepOriginalLink: boolean;
                            } | undefined;
                            templateMessage?: {
                                buttons?: {
                                    id: string;
                                    text: string;
                                    url: string;
                                }[] | undefined;
                                hasAttachments?: "video" | "image" | "document" | undefined;
                                id: string;
                                text: string;
                                name: string;
                                tags: {
                                    value: string;
                                    id: string;
                                    name: string;
                                }[];
                            } | undefined;
                            labels?: {
                                type: string;
                                id: string;
                            }[] | undefined;
                            type: import("../../../..").messageType;
                            name: string;
                            machineId: number;
                            height: number;
                            active: boolean;
                        } | undefined;
                        sequence?: {
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
                        } | undefined;
                        reply?: {
                            messageId: string;
                            childrenReplyTrigger: string[];
                        } | undefined;
                        trigger?: {
                            timer?: {
                                days: number;
                                hours: number;
                                minutes: number;
                            } | undefined;
                            active?: boolean | undefined;
                            duplicationErrors?: {
                                where: "actions";
                                what: string;
                            }[] | undefined;
                            buttonId?: string | undefined;
                            answer?: string | undefined;
                            filters?: {
                                score?: number | undefined;
                                tagId?: number | undefined;
                                closeWindow?: boolean | undefined;
                                tagOperatorAnd?: boolean | undefined;
                                type: number;
                            }[] | undefined;
                            sequenceId: string;
                            machineId: number;
                            height: number;
                            messageId: string;
                            actions: {
                                name?: string | undefined;
                                matchConditionals?: boolean | undefined;
                                score?: number | undefined;
                                move?: {
                                    message?: {
                                        nodeId?: string | undefined;
                                        index?: number | undefined;
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    machine: {
                                        id: number;
                                        name: string;
                                    };
                                    funnel: {
                                        nodeId?: string | undefined;
                                        id: number;
                                        name: string;
                                    };
                                } | undefined;
                                assign?: {
                                    id: number;
                                    name: string;
                                    to: "attendant" | "team";
                                } | undefined;
                                field?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                product?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                crm?: {
                                    board?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    column?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    group?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                } | undefined;
                                tag?: number | undefined;
                                actionReactFlowId?: string | undefined;
                                leadloversId?: number | undefined;
                                type: import("../../../..").actionType;
                                id: string;
                            }[];
                            teste: boolean;
                            event: import("../../../..").eventType;
                        } | undefined;
                    };
                    type: import("../../../..").nodeType;
                    id: string;
                    position: {
                        x: number;
                        y: number;
                    };
                }[];
            };
            _output_in: {
                edges: {
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
                }[];
                nodes: {
                    height?: number | null | undefined;
                    width?: number | null | undefined;
                    versionId: number;
                    data: string;
                    type: string | null;
                    status: string;
                    style: string | null;
                    hidden: boolean | null;
                    deletable: boolean | null;
                    focusable: boolean | null;
                    className: string | null;
                    selected: boolean | null;
                    zIndex: number | null;
                    ariaLabel: string | null;
                    id: string;
                    reactFlowId: string;
                    leadloversId: number | null;
                    parentNode: string | null;
                    position: string;
                    draggable: boolean | null;
                    targetPosition: string | null;
                    sourcePosition: string | null;
                    dragging: boolean | null;
                    selectable: boolean | null;
                    connectable: boolean | null;
                    dragHandle: string | null;
                    extent: string | null;
                    expandParent: boolean | null;
                    positionAbsolute: string | null;
                }[];
            };
            _output_out: {
                edges: {
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
                }[];
                nodes: {
                    [k: string]: string | number | boolean | {
                        message?: {
                            timer: {
                                weekdays: string;
                                taskFixedDate?: {
                                    day: string;
                                    month: string;
                                    year: string;
                                } | undefined;
                                timeToNextMessage: {
                                    days: string;
                                    hours: string;
                                    minutes: string;
                                    seconds: string;
                                };
                                initialSendingHour: {
                                    hour: string;
                                    minute: string;
                                };
                                finalSendingHour: {
                                    hour: string;
                                    minute: string;
                                };
                            };
                            openMessage?: {
                                buttons?: {
                                    id: string;
                                    text: string;
                                    url: string;
                                }[] | undefined;
                                buttonCta?: {
                                    text: string;
                                    url: string;
                                } | undefined;
                                attachments?: {
                                    type: string;
                                    id: string;
                                    url: string;
                                    name: string;
                                }[] | undefined;
                                audios?: {
                                    type: string;
                                    id: string;
                                    url: string;
                                    name: string;
                                    size: number;
                                }[] | undefined;
                                contacts?: number[] | undefined;
                                messagesToForward?: string[] | undefined;
                                linksPreview?: {
                                    linkId: string;
                                    title: string;
                                    description: string;
                                    body: string;
                                    link: string;
                                }[] | undefined;
                                text: string;
                                enableLinkPreview: boolean;
                                keepOriginalLink: boolean;
                            } | undefined;
                            templateMessage?: {
                                buttons?: {
                                    id: string;
                                    text: string;
                                    url: string;
                                }[] | undefined;
                                hasAttachments?: "video" | "image" | "document" | undefined;
                                id: string;
                                text: string;
                                name: string;
                                tags: {
                                    value: string;
                                    id: string;
                                    name: string;
                                }[];
                            } | undefined;
                            labels?: {
                                type: string;
                                id: string;
                            }[] | undefined;
                            type: import("../../../..").messageType;
                            name: string;
                            machineId: number;
                            height: number;
                            active: boolean;
                        } | undefined;
                        versionId?: number | undefined;
                        sequence?: {
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
                        } | undefined;
                        reply?: {
                            messageId: string;
                            childrenReplyTrigger: string[];
                        } | undefined;
                        trigger?: {
                            timer?: {
                                days: number;
                                hours: number;
                                minutes: number;
                            } | undefined;
                            active?: boolean | undefined;
                            duplicationErrors?: {
                                where: "actions";
                                what: string;
                            }[] | undefined;
                            buttonId?: string | undefined;
                            answer?: string | undefined;
                            filters?: {
                                score?: number | undefined;
                                tagId?: number | undefined;
                                closeWindow?: boolean | undefined;
                                tagOperatorAnd?: boolean | undefined;
                                type: number;
                            }[] | undefined;
                            sequenceId: string;
                            machineId: number;
                            height: number;
                            messageId: string;
                            actions: {
                                matchConditionals?: boolean | undefined;
                                tagsToApply?: {
                                    id: number;
                                    name: string;
                                }[] | undefined;
                                tagsToRemove?: {
                                    id: number;
                                    name: string;
                                }[] | undefined;
                                score?: number | undefined;
                                move?: {
                                    message?: {
                                        nodeId?: string | undefined;
                                        index?: number | undefined;
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    machine: {
                                        id: number;
                                        name: string;
                                    };
                                    funnel: {
                                        nodeId?: string | undefined;
                                        id: number;
                                        name: string;
                                    };
                                } | undefined;
                                assign?: {
                                    id: number;
                                    name: string;
                                    to: "attendant" | "team";
                                } | undefined;
                                field?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                product?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                crm?: {
                                    board?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    column?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    group?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                } | undefined;
                                type: import("../../../..").actionType;
                                id: string;
                            }[];
                            teste: boolean;
                            event: import("../../../..").eventType;
                        } | undefined;
                    } | {
                        x: number;
                        y: number;
                    } | null;
                }[];
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
                data?: {
                    message?: {
                        height?: number | undefined;
                        timer?: {
                            taskFixedDate?: {
                                day: string;
                                month: string;
                                year: string;
                            } | undefined;
                            timeToNextMessage: {
                                days: string;
                                hours: string;
                                minutes: string;
                                seconds: string;
                            };
                            initialSendingHour: {
                                hour: string;
                                minute: string;
                            };
                            finalSendingHour: {
                                hour: string;
                                minute: string;
                            };
                            weekdays: string;
                        } | undefined;
                        active?: boolean | undefined;
                        openMessage?: {
                            enableLinkPreview?: boolean | undefined;
                            keepOriginalLink?: boolean | undefined;
                            buttons?: {
                                url?: string | undefined;
                                id: string;
                                text: string;
                            }[] | undefined;
                            buttonCta?: {
                                text: string;
                                url: string;
                            } | undefined;
                            attachments?: {
                                type: string;
                                id: string;
                                url: string;
                                name: string;
                            }[] | undefined;
                            audios?: {
                                type: string;
                                id: string;
                                url: string;
                                name: string;
                                size: number;
                            }[] | undefined;
                            contacts?: number[] | undefined;
                            messagesToForward?: string[] | undefined;
                            linksPreview?: {
                                linkId: string;
                                title: string;
                                description: string;
                                body: string;
                                link: string;
                            }[] | undefined;
                            text: string;
                        } | undefined;
                        templateMessage?: {
                            buttons?: {
                                url?: string | undefined;
                                id: string;
                                text: string;
                            }[] | undefined;
                            hasAttachments?: "video" | "image" | "document" | undefined;
                            id: string;
                            text: string;
                            name: string;
                            tags: {
                                value?: string | undefined;
                                id: string;
                                name: string;
                            }[];
                        } | undefined;
                        labels?: {
                            type: string;
                            id: string;
                        }[] | undefined;
                        type: import("../../../..").messageType;
                        name: string;
                        machineId: number;
                    } | undefined;
                    sequence?: {
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
                    } | undefined;
                    reply?: {
                        messageId?: string | undefined;
                        childrenReplyTrigger?: string[] | undefined;
                    } | undefined;
                    trigger?: {
                        height?: number | undefined;
                        timer?: {
                            days?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        active?: boolean | undefined;
                        duplicationErrors?: {
                            where: "actions";
                            what: string;
                        }[] | undefined;
                        buttonId?: string | undefined;
                        answer?: string | undefined;
                        filters?: {
                            score?: number | undefined;
                            tagId?: number | undefined;
                            closeWindow?: boolean | undefined;
                            tagOperatorAnd?: boolean | undefined;
                            type: number;
                        }[] | undefined;
                        sequenceId: string;
                        machineId: number;
                        messageId: string;
                        actions: {
                            matchConditionals?: boolean | undefined;
                            tagsToApply?: {
                                id: number;
                                name: string;
                            }[] | undefined;
                            tagsToRemove?: {
                                id: number;
                                name: string;
                            }[] | undefined;
                            score?: number | undefined;
                            move?: {
                                message?: {
                                    id?: number | undefined;
                                    nodeId?: string | undefined;
                                    index?: number | undefined;
                                    name: string;
                                } | undefined;
                                machine: {
                                    id: number;
                                    name: string;
                                };
                                funnel: {
                                    id?: number | undefined;
                                    nodeId?: string | undefined;
                                    name: string;
                                };
                            } | undefined;
                            assign?: {
                                id: number;
                                name: string;
                                to: "attendant" | "team";
                            } | undefined;
                            field?: {
                                id: number;
                                name: string;
                            } | undefined;
                            product?: {
                                id: number;
                                name: string;
                            } | undefined;
                            crm?: {
                                board?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                column?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                group?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                            } | undefined;
                            type: import("../../../..").actionType;
                            id: string;
                        }[];
                        teste: boolean;
                        event: import("../../../..").eventType;
                    } | undefined;
                } | undefined;
                type?: import("../../../..").nodeType | undefined;
                style?: string | undefined;
                hidden?: boolean | undefined;
                deletable?: boolean | undefined;
                focusable?: boolean | undefined;
                className?: string | undefined;
                selected?: boolean | undefined;
                zIndex?: number | undefined;
                ariaLabel?: string | undefined;
                height?: number | undefined;
                parentNode?: string | undefined;
                position?: {
                    x: number;
                    y: number;
                } | undefined;
                draggable?: boolean | undefined;
                targetPosition?: "left" | "right" | "top" | "bottom" | undefined;
                sourcePosition?: "left" | "right" | "top" | "bottom" | undefined;
                dragging?: boolean | undefined;
                selectable?: boolean | undefined;
                connectable?: boolean | undefined;
                dragHandle?: string | undefined;
                width?: number | undefined;
                extent?: string | undefined;
                expandParent?: boolean | undefined;
                positionAbsolute?: string | undefined;
                flowId: string;
                id: string;
            };
            _input_out: {
                reactFlowId: string;
                data?: {
                    message?: {
                        timer: {
                            weekdays: string;
                            taskFixedDate?: {
                                day: string;
                                month: string;
                                year: string;
                            } | undefined;
                            timeToNextMessage: {
                                days: string;
                                hours: string;
                                minutes: string;
                                seconds: string;
                            };
                            initialSendingHour: {
                                hour: string;
                                minute: string;
                            };
                            finalSendingHour: {
                                hour: string;
                                minute: string;
                            };
                        };
                        openMessage?: {
                            buttons?: {
                                id: string;
                                text: string;
                                url: string;
                            }[] | undefined;
                            buttonCta?: {
                                text: string;
                                url: string;
                            } | undefined;
                            attachments?: {
                                type: string;
                                id: string;
                                url: string;
                                name: string;
                            }[] | undefined;
                            audios?: {
                                type: string;
                                id: string;
                                url: string;
                                name: string;
                                size: number;
                            }[] | undefined;
                            contacts?: number[] | undefined;
                            messagesToForward?: string[] | undefined;
                            linksPreview?: {
                                linkId: string;
                                title: string;
                                description: string;
                                body: string;
                                link: string;
                            }[] | undefined;
                            text: string;
                            enableLinkPreview: boolean;
                            keepOriginalLink: boolean;
                        } | undefined;
                        templateMessage?: {
                            buttons?: {
                                id: string;
                                text: string;
                                url: string;
                            }[] | undefined;
                            hasAttachments?: "video" | "image" | "document" | undefined;
                            id: string;
                            text: string;
                            name: string;
                            tags: {
                                value: string;
                                id: string;
                                name: string;
                            }[];
                        } | undefined;
                        labels?: {
                            type: string;
                            id: string;
                        }[] | undefined;
                        type: import("../../../..").messageType;
                        name: string;
                        machineId: number;
                        height: number;
                        active: boolean;
                    } | undefined;
                    sequence?: {
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
                    } | undefined;
                    reply?: {
                        messageId: string;
                        childrenReplyTrigger: string[];
                    } | undefined;
                    trigger?: {
                        timer?: {
                            days: number;
                            hours: number;
                            minutes: number;
                        } | undefined;
                        active?: boolean | undefined;
                        duplicationErrors?: {
                            where: "actions";
                            what: string;
                        }[] | undefined;
                        buttonId?: string | undefined;
                        answer?: string | undefined;
                        filters?: {
                            score?: number | undefined;
                            tagId?: number | undefined;
                            closeWindow?: boolean | undefined;
                            tagOperatorAnd?: boolean | undefined;
                            type: number;
                        }[] | undefined;
                        sequenceId: string;
                        machineId: number;
                        height: number;
                        messageId: string;
                        actions: {
                            name?: string | undefined;
                            matchConditionals?: boolean | undefined;
                            score?: number | undefined;
                            move?: {
                                message?: {
                                    nodeId?: string | undefined;
                                    index?: number | undefined;
                                    id: number;
                                    name: string;
                                } | undefined;
                                machine: {
                                    id: number;
                                    name: string;
                                };
                                funnel: {
                                    nodeId?: string | undefined;
                                    id: number;
                                    name: string;
                                };
                            } | undefined;
                            assign?: {
                                id: number;
                                name: string;
                                to: "attendant" | "team";
                            } | undefined;
                            field?: {
                                id: number;
                                name: string;
                            } | undefined;
                            product?: {
                                id: number;
                                name: string;
                            } | undefined;
                            crm?: {
                                board?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                column?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                group?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                            } | undefined;
                            tag?: number | undefined;
                            actionReactFlowId?: string | undefined;
                            leadloversId?: number | undefined;
                            type: import("../../../..").actionType;
                            id: string;
                        }[];
                        teste: boolean;
                        event: import("../../../..").eventType;
                    } | undefined;
                } | undefined;
                type?: import("../../../..").nodeType | undefined;
                style?: string | undefined;
                hidden?: boolean | undefined;
                deletable?: boolean | undefined;
                focusable?: boolean | undefined;
                className?: string | undefined;
                selected?: boolean | undefined;
                zIndex?: number | undefined;
                ariaLabel?: string | undefined;
                height?: number | undefined;
                parentNode?: string | undefined;
                position?: {
                    x: number;
                    y: number;
                } | undefined;
                draggable?: boolean | undefined;
                targetPosition?: "left" | "right" | "top" | "bottom" | undefined;
                sourcePosition?: "left" | "right" | "top" | "bottom" | undefined;
                dragging?: boolean | undefined;
                selectable?: boolean | undefined;
                connectable?: boolean | undefined;
                dragHandle?: string | undefined;
                width?: number | undefined;
                extent?: string | undefined;
                expandParent?: boolean | undefined;
                positionAbsolute?: string | undefined;
                flowId: string;
                id: string;
            };
            _output_in: {
                node: {
                    height?: number | null | undefined;
                    width?: number | null | undefined;
                    versionId: number;
                    data: string;
                    type: string | null;
                    status: string;
                    style: string | null;
                    hidden: boolean | null;
                    deletable: boolean | null;
                    focusable: boolean | null;
                    className: string | null;
                    selected: boolean | null;
                    zIndex: number | null;
                    ariaLabel: string | null;
                    id: string;
                    reactFlowId: string;
                    leadloversId: number | null;
                    parentNode: string | null;
                    position: string;
                    draggable: boolean | null;
                    targetPosition: string | null;
                    sourcePosition: string | null;
                    dragging: boolean | null;
                    selectable: boolean | null;
                    connectable: boolean | null;
                    dragHandle: string | null;
                    extent: string | null;
                    expandParent: boolean | null;
                    positionAbsolute: string | null;
                };
                toRemove: {
                    where: {
                        message: {
                            id: string;
                        };
                        sequence: {
                            id: string;
                        };
                    };
                    who: {
                        triggerIds: string[];
                        edgeIds: string[];
                    };
                }[];
            };
            _output_out: {
                node: {
                    [k: string]: string | number | boolean | {
                        message?: {
                            timer: {
                                weekdays: string;
                                taskFixedDate?: {
                                    day: string;
                                    month: string;
                                    year: string;
                                } | undefined;
                                timeToNextMessage: {
                                    days: string;
                                    hours: string;
                                    minutes: string;
                                    seconds: string;
                                };
                                initialSendingHour: {
                                    hour: string;
                                    minute: string;
                                };
                                finalSendingHour: {
                                    hour: string;
                                    minute: string;
                                };
                            };
                            openMessage?: {
                                buttons?: {
                                    id: string;
                                    text: string;
                                    url: string;
                                }[] | undefined;
                                buttonCta?: {
                                    text: string;
                                    url: string;
                                } | undefined;
                                attachments?: {
                                    type: string;
                                    id: string;
                                    url: string;
                                    name: string;
                                }[] | undefined;
                                audios?: {
                                    type: string;
                                    id: string;
                                    url: string;
                                    name: string;
                                    size: number;
                                }[] | undefined;
                                contacts?: number[] | undefined;
                                messagesToForward?: string[] | undefined;
                                linksPreview?: {
                                    linkId: string;
                                    title: string;
                                    description: string;
                                    body: string;
                                    link: string;
                                }[] | undefined;
                                text: string;
                                enableLinkPreview: boolean;
                                keepOriginalLink: boolean;
                            } | undefined;
                            templateMessage?: {
                                buttons?: {
                                    id: string;
                                    text: string;
                                    url: string;
                                }[] | undefined;
                                hasAttachments?: "video" | "image" | "document" | undefined;
                                id: string;
                                text: string;
                                name: string;
                                tags: {
                                    value: string;
                                    id: string;
                                    name: string;
                                }[];
                            } | undefined;
                            labels?: {
                                type: string;
                                id: string;
                            }[] | undefined;
                            type: import("../../../..").messageType;
                            name: string;
                            machineId: number;
                            height: number;
                            active: boolean;
                        } | undefined;
                        versionId?: number | undefined;
                        sequence?: {
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
                        } | undefined;
                        reply?: {
                            messageId: string;
                            childrenReplyTrigger: string[];
                        } | undefined;
                        trigger?: {
                            timer?: {
                                days: number;
                                hours: number;
                                minutes: number;
                            } | undefined;
                            active?: boolean | undefined;
                            duplicationErrors?: {
                                where: "actions";
                                what: string;
                            }[] | undefined;
                            buttonId?: string | undefined;
                            answer?: string | undefined;
                            filters?: {
                                score?: number | undefined;
                                tagId?: number | undefined;
                                closeWindow?: boolean | undefined;
                                tagOperatorAnd?: boolean | undefined;
                                type: number;
                            }[] | undefined;
                            sequenceId: string;
                            machineId: number;
                            height: number;
                            messageId: string;
                            actions: {
                                matchConditionals?: boolean | undefined;
                                tagsToApply?: {
                                    id: number;
                                    name: string;
                                }[] | undefined;
                                tagsToRemove?: {
                                    id: number;
                                    name: string;
                                }[] | undefined;
                                score?: number | undefined;
                                move?: {
                                    message?: {
                                        nodeId?: string | undefined;
                                        index?: number | undefined;
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    machine: {
                                        id: number;
                                        name: string;
                                    };
                                    funnel: {
                                        nodeId?: string | undefined;
                                        id: number;
                                        name: string;
                                    };
                                } | undefined;
                                assign?: {
                                    id: number;
                                    name: string;
                                    to: "attendant" | "team";
                                } | undefined;
                                field?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                product?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                crm?: {
                                    board?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    column?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    group?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                } | undefined;
                                type: import("../../../..").actionType;
                                id: string;
                            }[];
                            teste: boolean;
                            event: import("../../../..").eventType;
                        } | undefined;
                    } | {
                        x: number;
                        y: number;
                    } | null;
                };
                toRemove: {
                    where: {
                        message: {
                            id: string;
                        };
                        sequence: {
                            id: string;
                        };
                    };
                    who: {
                        triggerIds: string[];
                        edgeIds: string[];
                    };
                }[];
            };
        }, unknown>;
        editMany: import("@trpc/server").BuildProcedure<"mutation", {
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
                edges: {
                    data?: string | undefined;
                    sourceParentCode?: string | undefined;
                    targetParentCode?: string | undefined;
                    type?: import("../../../..").edgeType | undefined;
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
                }[];
                nodes: {
                    data?: {
                        message?: {
                            height?: number | undefined;
                            timer?: {
                                taskFixedDate?: {
                                    day: string;
                                    month: string;
                                    year: string;
                                } | undefined;
                                timeToNextMessage: {
                                    days: string;
                                    hours: string;
                                    minutes: string;
                                    seconds: string;
                                };
                                initialSendingHour: {
                                    hour: string;
                                    minute: string;
                                };
                                finalSendingHour: {
                                    hour: string;
                                    minute: string;
                                };
                                weekdays: string;
                            } | undefined;
                            active?: boolean | undefined;
                            openMessage?: {
                                enableLinkPreview?: boolean | undefined;
                                keepOriginalLink?: boolean | undefined;
                                buttons?: {
                                    url?: string | undefined;
                                    id: string;
                                    text: string;
                                }[] | undefined;
                                buttonCta?: {
                                    text: string;
                                    url: string;
                                } | undefined;
                                attachments?: {
                                    type: string;
                                    id: string;
                                    url: string;
                                    name: string;
                                }[] | undefined;
                                audios?: {
                                    type: string;
                                    id: string;
                                    url: string;
                                    name: string;
                                    size: number;
                                }[] | undefined;
                                contacts?: number[] | undefined;
                                messagesToForward?: string[] | undefined;
                                linksPreview?: {
                                    linkId: string;
                                    title: string;
                                    description: string;
                                    body: string;
                                    link: string;
                                }[] | undefined;
                                text: string;
                            } | undefined;
                            templateMessage?: {
                                buttons?: {
                                    url?: string | undefined;
                                    id: string;
                                    text: string;
                                }[] | undefined;
                                hasAttachments?: "video" | "image" | "document" | undefined;
                                id: string;
                                text: string;
                                name: string;
                                tags: {
                                    value?: string | undefined;
                                    id: string;
                                    name: string;
                                }[];
                            } | undefined;
                            labels?: {
                                type: string;
                                id: string;
                            }[] | undefined;
                            type: import("../../../..").messageType;
                            name: string;
                            machineId: number;
                        } | undefined;
                        sequence?: {
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
                        } | undefined;
                        reply?: {
                            messageId?: string | undefined;
                            childrenReplyTrigger?: string[] | undefined;
                        } | undefined;
                        trigger?: {
                            height?: number | undefined;
                            timer?: {
                                days?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            active?: boolean | undefined;
                            duplicationErrors?: {
                                where: "actions";
                                what: string;
                            }[] | undefined;
                            buttonId?: string | undefined;
                            answer?: string | undefined;
                            filters?: {
                                score?: number | undefined;
                                tagId?: number | undefined;
                                closeWindow?: boolean | undefined;
                                tagOperatorAnd?: boolean | undefined;
                                type: number;
                            }[] | undefined;
                            sequenceId: string;
                            machineId: number;
                            messageId: string;
                            actions: {
                                matchConditionals?: boolean | undefined;
                                tagsToApply?: {
                                    id: number;
                                    name: string;
                                }[] | undefined;
                                tagsToRemove?: {
                                    id: number;
                                    name: string;
                                }[] | undefined;
                                score?: number | undefined;
                                move?: {
                                    message?: {
                                        id?: number | undefined;
                                        nodeId?: string | undefined;
                                        index?: number | undefined;
                                        name: string;
                                    } | undefined;
                                    machine: {
                                        id: number;
                                        name: string;
                                    };
                                    funnel: {
                                        id?: number | undefined;
                                        nodeId?: string | undefined;
                                        name: string;
                                    };
                                } | undefined;
                                assign?: {
                                    id: number;
                                    name: string;
                                    to: "attendant" | "team";
                                } | undefined;
                                field?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                product?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                crm?: {
                                    board?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    column?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    group?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                } | undefined;
                                type: import("../../../..").actionType;
                                id: string;
                            }[];
                            teste: boolean;
                            event: import("../../../..").eventType;
                        } | undefined;
                    } | undefined;
                    type?: import("../../../..").nodeType | undefined;
                    style?: string | undefined;
                    hidden?: boolean | undefined;
                    deletable?: boolean | undefined;
                    focusable?: boolean | undefined;
                    className?: string | undefined;
                    selected?: boolean | undefined;
                    zIndex?: number | undefined;
                    ariaLabel?: string | undefined;
                    height?: number | undefined;
                    parentNode?: string | undefined;
                    position?: {
                        x: number;
                        y: number;
                    } | undefined;
                    draggable?: boolean | undefined;
                    targetPosition?: "left" | "right" | "top" | "bottom" | undefined;
                    sourcePosition?: "left" | "right" | "top" | "bottom" | undefined;
                    dragging?: boolean | undefined;
                    selectable?: boolean | undefined;
                    connectable?: boolean | undefined;
                    dragHandle?: string | undefined;
                    width?: number | undefined;
                    extent?: string | undefined;
                    expandParent?: boolean | undefined;
                    positionAbsolute?: string | undefined;
                    flowId: string;
                    id: string;
                }[];
            };
            _input_out: {
                flowId: string;
                edges: {
                    reactFlowId: string;
                    data?: string | undefined;
                    sourceParentCode?: string | undefined;
                    targetParentCode?: string | undefined;
                    type?: import("../../../..").edgeType | undefined;
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
                }[];
                nodes: {
                    reactFlowId: string;
                    data?: {
                        message?: {
                            timer: {
                                weekdays: string;
                                taskFixedDate?: {
                                    day: string;
                                    month: string;
                                    year: string;
                                } | undefined;
                                timeToNextMessage: {
                                    days: string;
                                    hours: string;
                                    minutes: string;
                                    seconds: string;
                                };
                                initialSendingHour: {
                                    hour: string;
                                    minute: string;
                                };
                                finalSendingHour: {
                                    hour: string;
                                    minute: string;
                                };
                            };
                            openMessage?: {
                                buttons?: {
                                    id: string;
                                    text: string;
                                    url: string;
                                }[] | undefined;
                                buttonCta?: {
                                    text: string;
                                    url: string;
                                } | undefined;
                                attachments?: {
                                    type: string;
                                    id: string;
                                    url: string;
                                    name: string;
                                }[] | undefined;
                                audios?: {
                                    type: string;
                                    id: string;
                                    url: string;
                                    name: string;
                                    size: number;
                                }[] | undefined;
                                contacts?: number[] | undefined;
                                messagesToForward?: string[] | undefined;
                                linksPreview?: {
                                    linkId: string;
                                    title: string;
                                    description: string;
                                    body: string;
                                    link: string;
                                }[] | undefined;
                                text: string;
                                enableLinkPreview: boolean;
                                keepOriginalLink: boolean;
                            } | undefined;
                            templateMessage?: {
                                buttons?: {
                                    id: string;
                                    text: string;
                                    url: string;
                                }[] | undefined;
                                hasAttachments?: "video" | "image" | "document" | undefined;
                                id: string;
                                text: string;
                                name: string;
                                tags: {
                                    value: string;
                                    id: string;
                                    name: string;
                                }[];
                            } | undefined;
                            labels?: {
                                type: string;
                                id: string;
                            }[] | undefined;
                            type: import("../../../..").messageType;
                            name: string;
                            machineId: number;
                            height: number;
                            active: boolean;
                        } | undefined;
                        sequence?: {
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
                        } | undefined;
                        reply?: {
                            messageId: string;
                            childrenReplyTrigger: string[];
                        } | undefined;
                        trigger?: {
                            timer?: {
                                days: number;
                                hours: number;
                                minutes: number;
                            } | undefined;
                            active?: boolean | undefined;
                            duplicationErrors?: {
                                where: "actions";
                                what: string;
                            }[] | undefined;
                            buttonId?: string | undefined;
                            answer?: string | undefined;
                            filters?: {
                                score?: number | undefined;
                                tagId?: number | undefined;
                                closeWindow?: boolean | undefined;
                                tagOperatorAnd?: boolean | undefined;
                                type: number;
                            }[] | undefined;
                            sequenceId: string;
                            machineId: number;
                            height: number;
                            messageId: string;
                            actions: {
                                name?: string | undefined;
                                matchConditionals?: boolean | undefined;
                                score?: number | undefined;
                                move?: {
                                    message?: {
                                        nodeId?: string | undefined;
                                        index?: number | undefined;
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    machine: {
                                        id: number;
                                        name: string;
                                    };
                                    funnel: {
                                        nodeId?: string | undefined;
                                        id: number;
                                        name: string;
                                    };
                                } | undefined;
                                assign?: {
                                    id: number;
                                    name: string;
                                    to: "attendant" | "team";
                                } | undefined;
                                field?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                product?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                crm?: {
                                    board?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    column?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    group?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                } | undefined;
                                tag?: number | undefined;
                                actionReactFlowId?: string | undefined;
                                leadloversId?: number | undefined;
                                type: import("../../../..").actionType;
                                id: string;
                            }[];
                            teste: boolean;
                            event: import("../../../..").eventType;
                        } | undefined;
                    } | undefined;
                    type?: import("../../../..").nodeType | undefined;
                    style?: string | undefined;
                    hidden?: boolean | undefined;
                    deletable?: boolean | undefined;
                    focusable?: boolean | undefined;
                    className?: string | undefined;
                    selected?: boolean | undefined;
                    zIndex?: number | undefined;
                    ariaLabel?: string | undefined;
                    height?: number | undefined;
                    parentNode?: string | undefined;
                    position?: {
                        x: number;
                        y: number;
                    } | undefined;
                    draggable?: boolean | undefined;
                    targetPosition?: "left" | "right" | "top" | "bottom" | undefined;
                    sourcePosition?: "left" | "right" | "top" | "bottom" | undefined;
                    dragging?: boolean | undefined;
                    selectable?: boolean | undefined;
                    connectable?: boolean | undefined;
                    dragHandle?: string | undefined;
                    width?: number | undefined;
                    extent?: string | undefined;
                    expandParent?: boolean | undefined;
                    positionAbsolute?: string | undefined;
                    flowId: string;
                    id: string;
                }[];
            };
            _output_in: {
                edges: {
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
                }[];
                nodes: {
                    height?: number | null | undefined;
                    width?: number | null | undefined;
                    versionId: number;
                    data: string;
                    type: string | null;
                    status: string;
                    style: string | null;
                    hidden: boolean | null;
                    deletable: boolean | null;
                    focusable: boolean | null;
                    className: string | null;
                    selected: boolean | null;
                    zIndex: number | null;
                    ariaLabel: string | null;
                    id: string;
                    reactFlowId: string;
                    leadloversId: number | null;
                    parentNode: string | null;
                    position: string;
                    draggable: boolean | null;
                    targetPosition: string | null;
                    sourcePosition: string | null;
                    dragging: boolean | null;
                    selectable: boolean | null;
                    connectable: boolean | null;
                    dragHandle: string | null;
                    extent: string | null;
                    expandParent: boolean | null;
                    positionAbsolute: string | null;
                }[];
                toRemove: {
                    where: {
                        message: {
                            id: string;
                        };
                        sequence: {
                            id: string;
                        };
                    };
                    who: {
                        triggerIds: string[];
                        edgeIds: string[];
                    };
                }[];
            };
            _output_out: {
                edges: {
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
                }[];
                nodes: {
                    [k: string]: string | number | boolean | {
                        message?: {
                            timer: {
                                weekdays: string;
                                taskFixedDate?: {
                                    day: string;
                                    month: string;
                                    year: string;
                                } | undefined;
                                timeToNextMessage: {
                                    days: string;
                                    hours: string;
                                    minutes: string;
                                    seconds: string;
                                };
                                initialSendingHour: {
                                    hour: string;
                                    minute: string;
                                };
                                finalSendingHour: {
                                    hour: string;
                                    minute: string;
                                };
                            };
                            openMessage?: {
                                buttons?: {
                                    id: string;
                                    text: string;
                                    url: string;
                                }[] | undefined;
                                buttonCta?: {
                                    text: string;
                                    url: string;
                                } | undefined;
                                attachments?: {
                                    type: string;
                                    id: string;
                                    url: string;
                                    name: string;
                                }[] | undefined;
                                audios?: {
                                    type: string;
                                    id: string;
                                    url: string;
                                    name: string;
                                    size: number;
                                }[] | undefined;
                                contacts?: number[] | undefined;
                                messagesToForward?: string[] | undefined;
                                linksPreview?: {
                                    linkId: string;
                                    title: string;
                                    description: string;
                                    body: string;
                                    link: string;
                                }[] | undefined;
                                text: string;
                                enableLinkPreview: boolean;
                                keepOriginalLink: boolean;
                            } | undefined;
                            templateMessage?: {
                                buttons?: {
                                    id: string;
                                    text: string;
                                    url: string;
                                }[] | undefined;
                                hasAttachments?: "video" | "image" | "document" | undefined;
                                id: string;
                                text: string;
                                name: string;
                                tags: {
                                    value: string;
                                    id: string;
                                    name: string;
                                }[];
                            } | undefined;
                            labels?: {
                                type: string;
                                id: string;
                            }[] | undefined;
                            type: import("../../../..").messageType;
                            name: string;
                            machineId: number;
                            height: number;
                            active: boolean;
                        } | undefined;
                        versionId?: number | undefined;
                        sequence?: {
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
                        } | undefined;
                        reply?: {
                            messageId: string;
                            childrenReplyTrigger: string[];
                        } | undefined;
                        trigger?: {
                            timer?: {
                                days: number;
                                hours: number;
                                minutes: number;
                            } | undefined;
                            active?: boolean | undefined;
                            duplicationErrors?: {
                                where: "actions";
                                what: string;
                            }[] | undefined;
                            buttonId?: string | undefined;
                            answer?: string | undefined;
                            filters?: {
                                score?: number | undefined;
                                tagId?: number | undefined;
                                closeWindow?: boolean | undefined;
                                tagOperatorAnd?: boolean | undefined;
                                type: number;
                            }[] | undefined;
                            sequenceId: string;
                            machineId: number;
                            height: number;
                            messageId: string;
                            actions: {
                                matchConditionals?: boolean | undefined;
                                tagsToApply?: {
                                    id: number;
                                    name: string;
                                }[] | undefined;
                                tagsToRemove?: {
                                    id: number;
                                    name: string;
                                }[] | undefined;
                                score?: number | undefined;
                                move?: {
                                    message?: {
                                        nodeId?: string | undefined;
                                        index?: number | undefined;
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    machine: {
                                        id: number;
                                        name: string;
                                    };
                                    funnel: {
                                        nodeId?: string | undefined;
                                        id: number;
                                        name: string;
                                    };
                                } | undefined;
                                assign?: {
                                    id: number;
                                    name: string;
                                    to: "attendant" | "team";
                                } | undefined;
                                field?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                product?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                crm?: {
                                    board?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    column?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                    group?: {
                                        id: number;
                                        name: string;
                                    } | undefined;
                                } | undefined;
                                type: import("../../../..").actionType;
                                id: string;
                            }[];
                            teste: boolean;
                            event: import("../../../..").eventType;
                        } | undefined;
                    } | {
                        x: number;
                        y: number;
                    } | null;
                }[];
                toRemove: {
                    where: {
                        message: {
                            id: string;
                        };
                        sequence: {
                            id: string;
                        };
                    };
                    who: {
                        triggerIds: string[];
                        edgeIds: string[];
                    };
                }[];
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
        listById: import("@trpc/server").BuildProcedure<"query", {
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
                versionId?: number | undefined;
                flowId: string;
                id: string;
            };
            _input_out: {
                versionId?: number | undefined;
                flowId: string;
                id: string;
            };
            _output_in: {
                height?: number | null | undefined;
                width?: number | null | undefined;
                childNodes?: {
                    height?: number | null | undefined;
                    width?: number | null | undefined;
                    versionId: number;
                    data: string;
                    type: string | null;
                    status: string;
                    style: string | null;
                    hidden: boolean | null;
                    deletable: boolean | null;
                    focusable: boolean | null;
                    className: string | null;
                    selected: boolean | null;
                    zIndex: number | null;
                    ariaLabel: string | null;
                    id: string;
                    reactFlowId: string;
                    leadloversId: number | null;
                    parentNode: string | null;
                    position: string;
                    draggable: boolean | null;
                    targetPosition: string | null;
                    sourcePosition: string | null;
                    dragging: boolean | null;
                    selectable: boolean | null;
                    connectable: boolean | null;
                    dragHandle: string | null;
                    extent: string | null;
                    expandParent: boolean | null;
                    positionAbsolute: string | null;
                }[] | undefined;
                edges?: {
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
                }[] | undefined;
                versionId: number;
                data: string;
                type: string | null;
                status: string;
                style: string | null;
                hidden: boolean | null;
                deletable: boolean | null;
                focusable: boolean | null;
                className: string | null;
                selected: boolean | null;
                zIndex: number | null;
                ariaLabel: string | null;
                id: string;
                reactFlowId: string;
                leadloversId: number | null;
                parentNode: string | null;
                position: string;
                draggable: boolean | null;
                targetPosition: string | null;
                sourcePosition: string | null;
                dragging: boolean | null;
                selectable: boolean | null;
                connectable: boolean | null;
                dragHandle: string | null;
                extent: string | null;
                expandParent: boolean | null;
                positionAbsolute: string | null;
            };
            _output_out: {
                [k: string]: string | number | boolean | {
                    message?: {
                        timer: {
                            weekdays: string;
                            taskFixedDate?: {
                                day: string;
                                month: string;
                                year: string;
                            } | undefined;
                            timeToNextMessage: {
                                days: string;
                                hours: string;
                                minutes: string;
                                seconds: string;
                            };
                            initialSendingHour: {
                                hour: string;
                                minute: string;
                            };
                            finalSendingHour: {
                                hour: string;
                                minute: string;
                            };
                        };
                        openMessage?: {
                            buttons?: {
                                id: string;
                                text: string;
                                url: string;
                            }[] | undefined;
                            buttonCta?: {
                                text: string;
                                url: string;
                            } | undefined;
                            attachments?: {
                                type: string;
                                id: string;
                                url: string;
                                name: string;
                            }[] | undefined;
                            audios?: {
                                type: string;
                                id: string;
                                url: string;
                                name: string;
                                size: number;
                            }[] | undefined;
                            contacts?: number[] | undefined;
                            messagesToForward?: string[] | undefined;
                            linksPreview?: {
                                linkId: string;
                                title: string;
                                description: string;
                                body: string;
                                link: string;
                            }[] | undefined;
                            text: string;
                            enableLinkPreview: boolean;
                            keepOriginalLink: boolean;
                        } | undefined;
                        templateMessage?: {
                            buttons?: {
                                id: string;
                                text: string;
                                url: string;
                            }[] | undefined;
                            hasAttachments?: "video" | "image" | "document" | undefined;
                            id: string;
                            text: string;
                            name: string;
                            tags: {
                                value: string;
                                id: string;
                                name: string;
                            }[];
                        } | undefined;
                        labels?: {
                            type: string;
                            id: string;
                        }[] | undefined;
                        type: import("../../../..").messageType;
                        name: string;
                        machineId: number;
                        height: number;
                        active: boolean;
                    } | undefined;
                    versionId?: number | undefined;
                    sequence?: {
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
                    } | undefined;
                    reply?: {
                        messageId: string;
                        childrenReplyTrigger: string[];
                    } | undefined;
                    trigger?: {
                        timer?: {
                            days: number;
                            hours: number;
                            minutes: number;
                        } | undefined;
                        active?: boolean | undefined;
                        duplicationErrors?: {
                            where: "actions";
                            what: string;
                        }[] | undefined;
                        buttonId?: string | undefined;
                        answer?: string | undefined;
                        filters?: {
                            score?: number | undefined;
                            tagId?: number | undefined;
                            closeWindow?: boolean | undefined;
                            tagOperatorAnd?: boolean | undefined;
                            type: number;
                        }[] | undefined;
                        sequenceId: string;
                        machineId: number;
                        height: number;
                        messageId: string;
                        actions: {
                            matchConditionals?: boolean | undefined;
                            tagsToApply?: {
                                id: number;
                                name: string;
                            }[] | undefined;
                            tagsToRemove?: {
                                id: number;
                                name: string;
                            }[] | undefined;
                            score?: number | undefined;
                            move?: {
                                message?: {
                                    nodeId?: string | undefined;
                                    index?: number | undefined;
                                    id: number;
                                    name: string;
                                } | undefined;
                                machine: {
                                    id: number;
                                    name: string;
                                };
                                funnel: {
                                    nodeId?: string | undefined;
                                    id: number;
                                    name: string;
                                };
                            } | undefined;
                            assign?: {
                                id: number;
                                name: string;
                                to: "attendant" | "team";
                            } | undefined;
                            field?: {
                                id: number;
                                name: string;
                            } | undefined;
                            product?: {
                                id: number;
                                name: string;
                            } | undefined;
                            crm?: {
                                board?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                column?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                                group?: {
                                    id: number;
                                    name: string;
                                } | undefined;
                            } | undefined;
                            type: import("../../../..").actionType;
                            id: string;
                        }[];
                        teste: boolean;
                        event: import("../../../..").eventType;
                    } | undefined;
                } | {
                    x: number;
                    y: number;
                } | {
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
                }[] | {
                    height?: number | null | undefined;
                    width?: number | null | undefined;
                    versionId: number;
                    data: string;
                    type: string | null;
                    status: string;
                    style: string | null;
                    hidden: boolean | null;
                    deletable: boolean | null;
                    focusable: boolean | null;
                    className: string | null;
                    selected: boolean | null;
                    zIndex: number | null;
                    ariaLabel: string | null;
                    id: string;
                    reactFlowId: string;
                    leadloversId: number | null;
                    parentNode: string | null;
                    position: string;
                    draggable: boolean | null;
                    targetPosition: string | null;
                    sourcePosition: string | null;
                    dragging: boolean | null;
                    selectable: boolean | null;
                    connectable: boolean | null;
                    dragHandle: string | null;
                    extent: string | null;
                    expandParent: boolean | null;
                    positionAbsolute: string | null;
                }[] | null;
            };
        }, unknown>;
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
                id: string;
            };
            _input_out: {
                flowId: string;
                id: string;
            };
            _output_in: {
                actions: string[];
                triggerId: string;
            }[];
            _output_out: {
                actions: string[];
                triggerId: string;
            }[];
        }, unknown>;
        removeMany: import("@trpc/server").BuildProcedure<"mutation", {
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
            _output_in: {
                actions: string[];
                triggerId: string;
            }[];
            _output_out: {
                actions: string[];
                triggerId: string;
            }[];
        }, unknown>;
    }>;
    edges: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
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
                type: import("../../../..").edgeType;
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
                type: import("../../../..").edgeType;
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
                type?: import("../../../..").edgeType | undefined;
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
                type?: import("../../../..").edgeType | undefined;
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
    session: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
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
    leadlovers: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
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
}>;
export type ApiRouter = typeof apiRouter;
