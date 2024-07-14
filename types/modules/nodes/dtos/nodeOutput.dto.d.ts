import { z } from 'zod';
declare const toRemove: z.ZodObject<{
    where: z.ZodObject<{
        sequence: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        message: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        message: {
            id: string;
        };
        sequence: {
            id: string;
        };
    }, {
        message: {
            id: string;
        };
        sequence: {
            id: string;
        };
    }>;
    who: z.ZodObject<{
        triggerIds: z.ZodArray<z.ZodString, "many">;
        edgeIds: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        triggerIds: string[];
        edgeIds: string[];
    }, {
        triggerIds: string[];
        edgeIds: string[];
    }>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>;
export declare const RemoveNodeOutputSchema: z.ZodArray<z.ZodObject<{
    triggerId: z.ZodString;
    actions: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    actions: string[];
    triggerId: string;
}, {
    actions: string[];
    triggerId: string;
}>, "many">;
export declare const NodeMutationOutputSchema: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodObject<{
    id: z.ZodString;
    reactFlowId: z.ZodString;
    data: z.ZodString;
    position: z.ZodString;
    versionId: z.ZodNumber;
    status: z.ZodString;
    draggable: z.ZodNullable<z.ZodBoolean>;
    parentNode: z.ZodNullable<z.ZodString>;
    type: z.ZodNullable<z.ZodString>;
    style: z.ZodNullable<z.ZodString>;
    className: z.ZodNullable<z.ZodString>;
    targetPosition: z.ZodNullable<z.ZodString>;
    sourcePosition: z.ZodNullable<z.ZodString>;
    hidden: z.ZodNullable<z.ZodBoolean>;
    selected: z.ZodNullable<z.ZodBoolean>;
    dragging: z.ZodNullable<z.ZodBoolean>;
    selectable: z.ZodNullable<z.ZodBoolean>;
    connectable: z.ZodNullable<z.ZodBoolean>;
    deletable: z.ZodNullable<z.ZodBoolean>;
    focusable: z.ZodNullable<z.ZodBoolean>;
    dragHandle: z.ZodNullable<z.ZodString>;
    width: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    height: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    zIndex: z.ZodNullable<z.ZodNumber>;
    extent: z.ZodNullable<z.ZodString>;
    expandParent: z.ZodNullable<z.ZodBoolean>;
    positionAbsolute: z.ZodNullable<z.ZodString>;
    ariaLabel: z.ZodNullable<z.ZodString>;
    leadloversId: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
    height?: number | null | undefined;
    width?: number | null | undefined;
    versionId: number;
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
}, {
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
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
    height?: number | null | undefined;
    width?: number | null | undefined;
    versionId: number;
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
}, {
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
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
    height?: number | null | undefined;
    width?: number | null | undefined;
    versionId: number;
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
}, {
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
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
    height?: number | null | undefined;
    width?: number | null | undefined;
    versionId: number;
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
}, {
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
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
    height?: number | null | undefined;
    width?: number | null | undefined;
    versionId: number;
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
}, {
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
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
    height?: number | null | undefined;
    width?: number | null | undefined;
    versionId: number;
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
}, {
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
}>, {
    position: {
        x: number;
        y: number;
    };
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
    height?: number | null | undefined;
    width?: number | null | undefined;
    versionId: number;
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
}, {
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
}>, {
    id: string;
    position: {
        x: number;
        y: number;
    };
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
    height?: number | null | undefined;
    width?: number | null | undefined;
    versionId: number;
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
    reactFlowId: string;
    leadloversId: number | null;
    parentNode: string | null;
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
}, {
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
}>, {
    id: string;
    position: {
        x: number;
        y: number;
    };
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
    height?: number | null | undefined;
    width?: number | null | undefined;
    versionId: number;
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
    reactFlowId: string;
    leadloversId: number | null;
    parentNode: string | null;
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
}, {
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
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    } | {
        x: number;
        y: number;
    } | null;
}, {
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
}>;
export declare const NodesMutationOutputSchema: z.ZodObject<{
    nodes: z.ZodArray<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodObject<{
        id: z.ZodString;
        reactFlowId: z.ZodString;
        data: z.ZodString;
        position: z.ZodString;
        versionId: z.ZodNumber;
        status: z.ZodString;
        draggable: z.ZodNullable<z.ZodBoolean>;
        parentNode: z.ZodNullable<z.ZodString>;
        type: z.ZodNullable<z.ZodString>;
        style: z.ZodNullable<z.ZodString>;
        className: z.ZodNullable<z.ZodString>;
        targetPosition: z.ZodNullable<z.ZodString>;
        sourcePosition: z.ZodNullable<z.ZodString>;
        hidden: z.ZodNullable<z.ZodBoolean>;
        selected: z.ZodNullable<z.ZodBoolean>;
        dragging: z.ZodNullable<z.ZodBoolean>;
        selectable: z.ZodNullable<z.ZodBoolean>;
        connectable: z.ZodNullable<z.ZodBoolean>;
        deletable: z.ZodNullable<z.ZodBoolean>;
        focusable: z.ZodNullable<z.ZodBoolean>;
        dragHandle: z.ZodNullable<z.ZodString>;
        width: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        height: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        zIndex: z.ZodNullable<z.ZodNumber>;
        extent: z.ZodNullable<z.ZodString>;
        expandParent: z.ZodNullable<z.ZodBoolean>;
        positionAbsolute: z.ZodNullable<z.ZodString>;
        ariaLabel: z.ZodNullable<z.ZodString>;
        leadloversId: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
    }, {
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
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
    }, {
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
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
    }, {
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
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
    }, {
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
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
    }, {
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
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
    }, {
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
    }>, {
        position: {
            x: number;
            y: number;
        };
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
    }, {
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
    }>, {
        id: string;
        position: {
            x: number;
            y: number;
        };
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
        reactFlowId: string;
        leadloversId: number | null;
        parentNode: string | null;
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
    }, {
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
    }>, {
        id: string;
        position: {
            x: number;
            y: number;
        };
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
        reactFlowId: string;
        leadloversId: number | null;
        parentNode: string | null;
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
    }, {
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
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        } | {
            x: number;
            y: number;
        } | null;
    }, {
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
    }>, "many">;
    edges: z.ZodArray<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodObject<{
        id: z.ZodString;
        reactFlowId: z.ZodString;
        source: z.ZodString;
        target: z.ZodString;
        markerStart: z.ZodString;
        markerEnd: z.ZodString;
        sourceParentCode: z.ZodString;
        targetParentCode: z.ZodString;
        versionId: z.ZodNumber;
        type: z.ZodNullable<z.ZodString>;
        sourceHandle: z.ZodNullable<z.ZodString>;
        targetHandle: z.ZodNullable<z.ZodString>;
        label: z.ZodNullable<z.ZodString>;
        labelStyle: z.ZodNullable<z.ZodString>;
        labelShowBg: z.ZodNullable<z.ZodBoolean>;
        labelBgStyle: z.ZodNullable<z.ZodString>;
        labelBgPadding: z.ZodNullable<z.ZodString>;
        labelBgBorderRadius: z.ZodNullable<z.ZodNumber>;
        style: z.ZodNullable<z.ZodString>;
        animated: z.ZodNullable<z.ZodBoolean>;
        hidden: z.ZodNullable<z.ZodBoolean>;
        deletable: z.ZodNullable<z.ZodBoolean>;
        focusable: z.ZodNullable<z.ZodBoolean>;
        data: z.ZodNullable<z.ZodString>;
        className: z.ZodNullable<z.ZodString>;
        sourceNode: z.ZodNullable<z.ZodString>;
        targetNode: z.ZodNullable<z.ZodString>;
        selected: z.ZodNullable<z.ZodBoolean>;
        zIndex: z.ZodNullable<z.ZodNumber>;
        ariaLabel: z.ZodNullable<z.ZodString>;
        interactionWidth: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, {
        id: string;
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
        reactFlowId: string;
    }, {
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
    }>, {
        id: string;
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
        reactFlowId: string;
    }, {
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
    }>, {
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
    }, {
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
    }>, {
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
    }, {
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
    }>, {
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
    }, {
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
    }>, {
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
    }, {
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        } | {
            x: number;
            y: number;
        } | null;
    }[];
}, {
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
}>;
export declare const NodeEditedOutputSchema: z.ZodObject<{
    node: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodObject<{
        id: z.ZodString;
        reactFlowId: z.ZodString;
        data: z.ZodString;
        position: z.ZodString;
        versionId: z.ZodNumber;
        status: z.ZodString;
        draggable: z.ZodNullable<z.ZodBoolean>;
        parentNode: z.ZodNullable<z.ZodString>;
        type: z.ZodNullable<z.ZodString>;
        style: z.ZodNullable<z.ZodString>;
        className: z.ZodNullable<z.ZodString>;
        targetPosition: z.ZodNullable<z.ZodString>;
        sourcePosition: z.ZodNullable<z.ZodString>;
        hidden: z.ZodNullable<z.ZodBoolean>;
        selected: z.ZodNullable<z.ZodBoolean>;
        dragging: z.ZodNullable<z.ZodBoolean>;
        selectable: z.ZodNullable<z.ZodBoolean>;
        connectable: z.ZodNullable<z.ZodBoolean>;
        deletable: z.ZodNullable<z.ZodBoolean>;
        focusable: z.ZodNullable<z.ZodBoolean>;
        dragHandle: z.ZodNullable<z.ZodString>;
        width: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        height: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        zIndex: z.ZodNullable<z.ZodNumber>;
        extent: z.ZodNullable<z.ZodString>;
        expandParent: z.ZodNullable<z.ZodBoolean>;
        positionAbsolute: z.ZodNullable<z.ZodString>;
        ariaLabel: z.ZodNullable<z.ZodString>;
        leadloversId: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
    }, {
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
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
    }, {
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
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
    }, {
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
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
    }, {
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
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
    }, {
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
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
    }, {
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
    }>, {
        position: {
            x: number;
            y: number;
        };
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
    }, {
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
    }>, {
        id: string;
        position: {
            x: number;
            y: number;
        };
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
        reactFlowId: string;
        leadloversId: number | null;
        parentNode: string | null;
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
    }, {
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
    }>, {
        id: string;
        position: {
            x: number;
            y: number;
        };
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
        reactFlowId: string;
        leadloversId: number | null;
        parentNode: string | null;
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
    }, {
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
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        } | {
            x: number;
            y: number;
        } | null;
    }, {
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
    }>;
    toRemove: z.ZodArray<z.ZodObject<{
        where: z.ZodObject<{
            sequence: z.ZodObject<{
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            message: z.ZodObject<{
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            message: {
                id: string;
            };
            sequence: {
                id: string;
            };
        }, {
            message: {
                id: string;
            };
            sequence: {
                id: string;
            };
        }>;
        who: z.ZodObject<{
            triggerIds: z.ZodArray<z.ZodString, "many">;
            edgeIds: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            triggerIds: string[];
            edgeIds: string[];
        }, {
            triggerIds: string[];
            edgeIds: string[];
        }>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
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
}, {
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
}>;
export declare const NodesEditedOutputSchema: z.ZodObject<{
    nodes: z.ZodArray<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodObject<{
        id: z.ZodString;
        reactFlowId: z.ZodString;
        data: z.ZodString;
        position: z.ZodString;
        versionId: z.ZodNumber;
        status: z.ZodString;
        draggable: z.ZodNullable<z.ZodBoolean>;
        parentNode: z.ZodNullable<z.ZodString>;
        type: z.ZodNullable<z.ZodString>;
        style: z.ZodNullable<z.ZodString>;
        className: z.ZodNullable<z.ZodString>;
        targetPosition: z.ZodNullable<z.ZodString>;
        sourcePosition: z.ZodNullable<z.ZodString>;
        hidden: z.ZodNullable<z.ZodBoolean>;
        selected: z.ZodNullable<z.ZodBoolean>;
        dragging: z.ZodNullable<z.ZodBoolean>;
        selectable: z.ZodNullable<z.ZodBoolean>;
        connectable: z.ZodNullable<z.ZodBoolean>;
        deletable: z.ZodNullable<z.ZodBoolean>;
        focusable: z.ZodNullable<z.ZodBoolean>;
        dragHandle: z.ZodNullable<z.ZodString>;
        width: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        height: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        zIndex: z.ZodNullable<z.ZodNumber>;
        extent: z.ZodNullable<z.ZodString>;
        expandParent: z.ZodNullable<z.ZodBoolean>;
        positionAbsolute: z.ZodNullable<z.ZodString>;
        ariaLabel: z.ZodNullable<z.ZodString>;
        leadloversId: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
    }, {
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
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
    }, {
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
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
    }, {
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
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
    }, {
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
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
    }, {
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
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
    }, {
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
    }>, {
        position: {
            x: number;
            y: number;
        };
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
    }, {
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
    }>, {
        id: string;
        position: {
            x: number;
            y: number;
        };
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
        reactFlowId: string;
        leadloversId: number | null;
        parentNode: string | null;
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
    }, {
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
    }>, {
        id: string;
        position: {
            x: number;
            y: number;
        };
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        height?: number | null | undefined;
        width?: number | null | undefined;
        versionId: number;
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
        reactFlowId: string;
        leadloversId: number | null;
        parentNode: string | null;
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
    }, {
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
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        } | {
            x: number;
            y: number;
        } | null;
    }, {
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
    }>, "many">;
    edges: z.ZodArray<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodObject<{
        id: z.ZodString;
        reactFlowId: z.ZodString;
        source: z.ZodString;
        target: z.ZodString;
        markerStart: z.ZodString;
        markerEnd: z.ZodString;
        sourceParentCode: z.ZodString;
        targetParentCode: z.ZodString;
        versionId: z.ZodNumber;
        type: z.ZodNullable<z.ZodString>;
        sourceHandle: z.ZodNullable<z.ZodString>;
        targetHandle: z.ZodNullable<z.ZodString>;
        label: z.ZodNullable<z.ZodString>;
        labelStyle: z.ZodNullable<z.ZodString>;
        labelShowBg: z.ZodNullable<z.ZodBoolean>;
        labelBgStyle: z.ZodNullable<z.ZodString>;
        labelBgPadding: z.ZodNullable<z.ZodString>;
        labelBgBorderRadius: z.ZodNullable<z.ZodNumber>;
        style: z.ZodNullable<z.ZodString>;
        animated: z.ZodNullable<z.ZodBoolean>;
        hidden: z.ZodNullable<z.ZodBoolean>;
        deletable: z.ZodNullable<z.ZodBoolean>;
        focusable: z.ZodNullable<z.ZodBoolean>;
        data: z.ZodNullable<z.ZodString>;
        className: z.ZodNullable<z.ZodString>;
        sourceNode: z.ZodNullable<z.ZodString>;
        targetNode: z.ZodNullable<z.ZodString>;
        selected: z.ZodNullable<z.ZodBoolean>;
        zIndex: z.ZodNullable<z.ZodNumber>;
        ariaLabel: z.ZodNullable<z.ZodString>;
        interactionWidth: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, {
        id: string;
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
        reactFlowId: string;
    }, {
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
    }>, {
        id: string;
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
        reactFlowId: string;
    }, {
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
    }>, {
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
    }, {
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
    }>, {
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
    }, {
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
    }>, {
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
    }, {
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
    }>, {
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
    }, {
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
    }>, "many">;
    toRemove: z.ZodArray<z.ZodObject<{
        where: z.ZodObject<{
            sequence: z.ZodObject<{
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            message: z.ZodObject<{
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            message: {
                id: string;
            };
            sequence: {
                id: string;
            };
        }, {
            message: {
                id: string;
            };
            sequence: {
                id: string;
            };
        }>;
        who: z.ZodObject<{
            triggerIds: z.ZodArray<z.ZodString, "many">;
            edgeIds: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            triggerIds: string[];
            edgeIds: string[];
        }, {
            triggerIds: string[];
            edgeIds: string[];
        }>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
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
}, {
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
}>;
export declare const NodeQueryOutputSchema: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodObject<z.extendShape<{
    id: z.ZodString;
    reactFlowId: z.ZodString;
    data: z.ZodString;
    position: z.ZodString;
    versionId: z.ZodNumber;
    status: z.ZodString;
    draggable: z.ZodNullable<z.ZodBoolean>;
    parentNode: z.ZodNullable<z.ZodString>;
    type: z.ZodNullable<z.ZodString>;
    style: z.ZodNullable<z.ZodString>;
    className: z.ZodNullable<z.ZodString>;
    targetPosition: z.ZodNullable<z.ZodString>;
    sourcePosition: z.ZodNullable<z.ZodString>;
    hidden: z.ZodNullable<z.ZodBoolean>;
    selected: z.ZodNullable<z.ZodBoolean>;
    dragging: z.ZodNullable<z.ZodBoolean>;
    selectable: z.ZodNullable<z.ZodBoolean>;
    connectable: z.ZodNullable<z.ZodBoolean>;
    deletable: z.ZodNullable<z.ZodBoolean>;
    focusable: z.ZodNullable<z.ZodBoolean>;
    dragHandle: z.ZodNullable<z.ZodString>;
    width: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    height: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    zIndex: z.ZodNullable<z.ZodNumber>;
    extent: z.ZodNullable<z.ZodString>;
    expandParent: z.ZodNullable<z.ZodBoolean>;
    positionAbsolute: z.ZodNullable<z.ZodString>;
    ariaLabel: z.ZodNullable<z.ZodString>;
    leadloversId: z.ZodNullable<z.ZodNumber>;
}, {
    childNodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        reactFlowId: z.ZodString;
        data: z.ZodString;
        position: z.ZodString;
        versionId: z.ZodNumber;
        status: z.ZodString;
        draggable: z.ZodNullable<z.ZodBoolean>;
        parentNode: z.ZodNullable<z.ZodString>;
        type: z.ZodNullable<z.ZodString>;
        style: z.ZodNullable<z.ZodString>;
        className: z.ZodNullable<z.ZodString>;
        targetPosition: z.ZodNullable<z.ZodString>;
        sourcePosition: z.ZodNullable<z.ZodString>;
        hidden: z.ZodNullable<z.ZodBoolean>;
        selected: z.ZodNullable<z.ZodBoolean>;
        dragging: z.ZodNullable<z.ZodBoolean>;
        selectable: z.ZodNullable<z.ZodBoolean>;
        connectable: z.ZodNullable<z.ZodBoolean>;
        deletable: z.ZodNullable<z.ZodBoolean>;
        focusable: z.ZodNullable<z.ZodBoolean>;
        dragHandle: z.ZodNullable<z.ZodString>;
        width: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        height: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        zIndex: z.ZodNullable<z.ZodNumber>;
        extent: z.ZodNullable<z.ZodString>;
        expandParent: z.ZodNullable<z.ZodBoolean>;
        positionAbsolute: z.ZodNullable<z.ZodString>;
        ariaLabel: z.ZodNullable<z.ZodString>;
        leadloversId: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, "many">>;
    edges: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodObject<{
        id: z.ZodString;
        reactFlowId: z.ZodString;
        source: z.ZodString;
        target: z.ZodString;
        markerStart: z.ZodString;
        markerEnd: z.ZodString;
        sourceParentCode: z.ZodString;
        targetParentCode: z.ZodString;
        versionId: z.ZodNumber;
        type: z.ZodNullable<z.ZodString>;
        sourceHandle: z.ZodNullable<z.ZodString>;
        targetHandle: z.ZodNullable<z.ZodString>;
        label: z.ZodNullable<z.ZodString>;
        labelStyle: z.ZodNullable<z.ZodString>;
        labelShowBg: z.ZodNullable<z.ZodBoolean>;
        labelBgStyle: z.ZodNullable<z.ZodString>;
        labelBgPadding: z.ZodNullable<z.ZodString>;
        labelBgBorderRadius: z.ZodNullable<z.ZodNumber>;
        style: z.ZodNullable<z.ZodString>;
        animated: z.ZodNullable<z.ZodBoolean>;
        hidden: z.ZodNullable<z.ZodBoolean>;
        deletable: z.ZodNullable<z.ZodBoolean>;
        focusable: z.ZodNullable<z.ZodBoolean>;
        data: z.ZodNullable<z.ZodString>;
        className: z.ZodNullable<z.ZodString>;
        sourceNode: z.ZodNullable<z.ZodString>;
        targetNode: z.ZodNullable<z.ZodString>;
        selected: z.ZodNullable<z.ZodBoolean>;
        zIndex: z.ZodNullable<z.ZodNumber>;
        ariaLabel: z.ZodNullable<z.ZodString>;
        interactionWidth: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, {
        id: string;
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
        reactFlowId: string;
    }, {
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
    }>, {
        id: string;
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
        reactFlowId: string;
    }, {
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
    }>, {
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
    }, {
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
    }>, {
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
    }, {
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
    }>, {
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
    }, {
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
    }>, {
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
    }, {
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
    }>, "many">>;
}>, "strip", z.ZodTypeAny, {
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
}, {
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
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
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
    versionId: number;
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
}, {
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
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
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
    versionId: number;
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
}, {
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
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
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
    versionId: number;
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
}, {
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
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
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
    versionId: number;
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
}, {
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
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
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
    versionId: number;
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
}, {
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
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
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
    versionId: number;
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
}, {
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
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
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
    versionId: number;
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
}, {
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
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
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
    versionId: number;
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
}, {
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
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
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
    versionId: number;
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
}, {
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
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
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
    versionId: number;
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
}, {
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
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
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
    versionId: number;
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
}, {
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
}>, {
    position: {
        x: number;
        y: number;
    };
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
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
    versionId: number;
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
}, {
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
}>, {
    id: string;
    position: {
        x: number;
        y: number;
    };
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
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
    versionId: number;
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
    reactFlowId: string;
    leadloversId: number | null;
    parentNode: string | null;
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
}, {
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
}>, {
    id: string;
    position: {
        x: number;
        y: number;
    };
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
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
    versionId: number;
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
    reactFlowId: string;
    leadloversId: number | null;
    parentNode: string | null;
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
}, {
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
}>, {
    id: string;
    position: {
        x: number;
        y: number;
    };
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
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
    versionId: number;
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
    reactFlowId: string;
    leadloversId: number | null;
    parentNode: string | null;
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
}, {
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
}>, {
    id: string;
    position: {
        x: number;
        y: number;
    };
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
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
    versionId: number;
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
    reactFlowId: string;
    leadloversId: number | null;
    parentNode: string | null;
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
}, {
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
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
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
}, {
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
}>;
export type NodeMutationOutputDTO = z.infer<typeof NodeMutationOutputSchema>;
export type NodesMutationOutputDTO = z.infer<typeof NodesMutationOutputSchema>;
export type NodeEditedOutputDTO = z.infer<typeof NodeEditedOutputSchema>;
export type NodesEditedOutputDTO = z.infer<typeof NodesEditedOutputSchema>;
export type NodeQueryOutputDTO = z.infer<typeof NodeQueryOutputSchema>;
export type RemoveNodeOutputDTO = z.infer<typeof RemoveNodeOutputSchema>;
export type NodeToRemove = z.infer<typeof toRemove>;
export {};
