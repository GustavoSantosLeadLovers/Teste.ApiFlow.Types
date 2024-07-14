/// <reference types="qs" />
/// <reference types="express" />
/// <reference types="node" />
/// <reference types="ws" />
export declare const nodeRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
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
                    type: import("../../../dtos/message.dto").messageType;
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
                        type: import("../../../dtos/action.dto").actionType;
                        id: string;
                    }[];
                    teste: boolean;
                    event: import("../../../dtos/trigger.dto").eventType;
                } | undefined;
            };
            type: import("../../../dtos/node.dto").nodeType;
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
                    type: import("../../../dtos/message.dto").messageType;
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
                        type: import("../../../dtos/action.dto").actionType;
                        id: string;
                    }[];
                    teste: boolean;
                    event: import("../../../dtos/trigger.dto").eventType;
                } | undefined;
            };
            type: import("../../../dtos/node.dto").nodeType;
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
                    type: import("../../../dtos/message.dto").messageType;
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
                        type: import("../../../dtos/action.dto").actionType;
                        id: string;
                    }[];
                    teste: boolean;
                    event: import("../../../dtos/trigger.dto").eventType;
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
                type: import("../../../../..").edgeType;
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
                        type: import("../../../dtos/message.dto").messageType;
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
                            type: import("../../../dtos/action.dto").actionType;
                            id: string;
                        }[];
                        teste: boolean;
                        event: import("../../../dtos/trigger.dto").eventType;
                    } | undefined;
                };
                type: import("../../../dtos/node.dto").nodeType;
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
                type: import("../../../../..").edgeType;
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
                        type: import("../../../dtos/message.dto").messageType;
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
                            type: import("../../../dtos/action.dto").actionType;
                            id: string;
                        }[];
                        teste: boolean;
                        event: import("../../../dtos/trigger.dto").eventType;
                    } | undefined;
                };
                type: import("../../../dtos/node.dto").nodeType;
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
                        type: import("../../../dtos/message.dto").messageType;
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
                            type: import("../../../dtos/action.dto").actionType;
                            id: string;
                        }[];
                        teste: boolean;
                        event: import("../../../dtos/trigger.dto").eventType;
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
                    type: import("../../../dtos/message.dto").messageType;
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
                        type: import("../../../dtos/action.dto").actionType;
                        id: string;
                    }[];
                    teste: boolean;
                    event: import("../../../dtos/trigger.dto").eventType;
                } | undefined;
            } | undefined;
            type?: import("../../../dtos/node.dto").nodeType | undefined;
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
                    type: import("../../../dtos/message.dto").messageType;
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
                        type: import("../../../dtos/action.dto").actionType;
                        id: string;
                    }[];
                    teste: boolean;
                    event: import("../../../dtos/trigger.dto").eventType;
                } | undefined;
            } | undefined;
            type?: import("../../../dtos/node.dto").nodeType | undefined;
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
                        type: import("../../../dtos/message.dto").messageType;
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
                            type: import("../../../dtos/action.dto").actionType;
                            id: string;
                        }[];
                        teste: boolean;
                        event: import("../../../dtos/trigger.dto").eventType;
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
            edges: {
                data?: string | undefined;
                sourceParentCode?: string | undefined;
                targetParentCode?: string | undefined;
                type?: import("../../../../..").edgeType | undefined;
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
                        type: import("../../../dtos/message.dto").messageType;
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
                            type: import("../../../dtos/action.dto").actionType;
                            id: string;
                        }[];
                        teste: boolean;
                        event: import("../../../dtos/trigger.dto").eventType;
                    } | undefined;
                } | undefined;
                type?: import("../../../dtos/node.dto").nodeType | undefined;
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
                type?: import("../../../../..").edgeType | undefined;
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
                        type: import("../../../dtos/message.dto").messageType;
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
                            type: import("../../../dtos/action.dto").actionType;
                            id: string;
                        }[];
                        teste: boolean;
                        event: import("../../../dtos/trigger.dto").eventType;
                    } | undefined;
                } | undefined;
                type?: import("../../../dtos/node.dto").nodeType | undefined;
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
                        type: import("../../../dtos/message.dto").messageType;
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
                            type: import("../../../dtos/action.dto").actionType;
                            id: string;
                        }[];
                        teste: boolean;
                        event: import("../../../dtos/trigger.dto").eventType;
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
                    type: import("../../../dtos/message.dto").messageType;
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
                        type: import("../../../dtos/action.dto").actionType;
                        id: string;
                    }[];
                    teste: boolean;
                    event: import("../../../dtos/trigger.dto").eventType;
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
