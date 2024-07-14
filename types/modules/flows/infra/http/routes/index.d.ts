/// <reference types="qs" />
/// <reference types="express" />
/// <reference types="node" />
/// <reference types="ws" />
import { CustomTRPCError } from '../../../../../common/helpers/CustomTRPCError';
import { flowStatus, whatsappApi } from '../../../dtos/flow.dto';
export declare const flowRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
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
        _input_in: {
            data?: {
                duplicationErrors?: {
                    code: import("../../../dtos/flow.dto").duplicationErrorCode;
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
            whatsappApi: whatsappApi;
        };
        _input_out: {
            data?: {
                duplicationErrors?: {
                    code: import("../../../dtos/flow.dto").duplicationErrorCode;
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
            whatsappApi: whatsappApi;
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
                    code: import("../../../dtos/flow.dto").duplicationErrorCode;
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
        _input_in: {
            data?: {
                duplicationErrors?: {
                    code: import("../../../dtos/flow.dto").duplicationErrorCode;
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
            status?: flowStatus | undefined;
            name?: string | undefined;
            id: string;
        };
        _input_out: {
            data?: {
                duplicationErrors?: {
                    code: import("../../../dtos/flow.dto").duplicationErrorCode;
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
            status?: flowStatus | undefined;
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
                    code: import("../../../dtos/flow.dto").duplicationErrorCode;
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
                        type: import("../../../../..").messageType;
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
                            type: import("../../../../..").actionType;
                            id: string;
                        }[];
                        teste: boolean;
                        event: import("../../../../..").eventType;
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
                        type: import("../../../../..").messageType;
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
                            type: import("../../../../..").actionType;
                            id: string;
                        }[];
                        teste: boolean;
                        event: import("../../../../..").eventType;
                    } | undefined;
                } | {
                    x: number;
                    y: number;
                } | null;
            }[] | undefined;
            data: {
                duplicationErrors?: {
                    code: import("../../../dtos/flow.dto").duplicationErrorCode;
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
        _input_in: {
            flowId: string;
            files: {
                type?: import("../../../dtos/upload.dto").mediaType | undefined;
                decodedBuffer?: any;
                sizeInBytes?: number | undefined;
                base64: string;
                name: string;
            }[];
        };
        _input_out: {
            flowId: string;
            files: {
                type?: import("../../../dtos/upload.dto").mediaType | undefined;
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
                        type: import("../../../../..").messageType;
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
                            type: import("../../../../..").actionType;
                            id: string;
                        }[];
                        teste: boolean;
                        event: import("../../../../..").eventType;
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
                        type: import("../../../../..").messageType;
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
                            type: import("../../../../..").actionType;
                            id: string;
                        }[];
                        teste: boolean;
                        event: import("../../../../..").eventType;
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
        status: flowStatus;
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
        _input_in: {
            machineId: number;
        };
        _input_out: {
            machineId: number;
        };
        _output_in: {
            isCloudApi: boolean;
            authentication: whatsappApi.CLOUD_API | whatsappApi.QRCODE;
        };
        _output_out: {
            isCloudApi: boolean;
            authentication: whatsappApi.CLOUD_API | whatsappApi.QRCODE;
        };
    }, unknown>;
}>;
