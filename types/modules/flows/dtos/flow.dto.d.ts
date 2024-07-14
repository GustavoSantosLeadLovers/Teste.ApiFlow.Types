import { z } from 'zod';
export declare enum flowStatus {
    CREATED = "created",
    ACTIVE = "active",
    REMOVED = "removed",
    REMOVED_FROM_LEADLOVERS = "removed from leadlovers",
    ENABLED = "enabled",
    REQUESTED_PUBLICATION = "requested publication",
    REQUESTED_PUBLICATION_FROM_LEADLOVERS = "requested publication from leadlovers",
    PUBLISHED = "published",
    PUBLISHING = "publishing",
    SUCCESS_PUBLISH = "success publish",
    SUCCESS_PUBLISH_FROM_LEADLOVERS = "success publish from leadlovers",
    ERROR_PUBLISH = "error publish",
    ERROR_PUBLISH_FROM_LEADLOVERS = "error publication from leadlovers"
}
export declare enum whatsappApi {
    CLOUD_API = "cloud_api",
    QRCODE = "qrcode",
    QRCODE_VERSION_A = "qrcode_version_a",
    QRCODE_VERSION_B = "qrcode_version_b"
}
export declare enum duplicationErrorsMessage {
    'FAILURE_TO_DUPLICATE_SEQUENCE' = "Failure to duplicate sequence",
    'FAILURE_TO_DUPLICATE_ATTACHMENT' = "Failure to duplicate attachment",
    'FAILURE_TO_DUPLICATE_AUDIO' = "Failure to duplicate audio",
    'FAILURE_TO_DUPLICATE_LINK_PREVIEW' = "Failure to duplicate link preview",
    'FAILURE_TO_DUPLICATE_MESSAGE' = "Failure to duplicate message",
    'FAILURE_TO_DUPLICATE_TRIGGER' = "Failure to duplicate trigger"
}
export declare enum duplicationErrorCode {
    'FAILURE_TO_DUPLICATE_SEQUENCE' = 10,
    'FAILURE_TO_DUPLICATE_ATTACHMENT' = 20,
    'FAILURE_TO_DUPLICATE_AUDIO' = 21,
    'FAILURE_TO_DUPLICATE_LINK_PREVIEW' = 22,
    'FAILURE_TO_DUPLICATE_MESSAGE' = 30,
    'FAILURE_TO_DUPLICATE_ACTION' = 40,
    'FAILURE_TO_DUPLICATE_TRIGGER' = 50
}
declare const duplicationError: z.ZodObject<{
    where: z.ZodString;
    who: z.ZodString;
    what: z.ZodString;
    type: z.ZodUnion<[z.ZodUnion<[z.ZodLiteral<"sequence">, z.ZodLiteral<"message">]>, z.ZodLiteral<"action">]>;
    code: z.ZodNativeEnum<typeof duplicationErrorCode>;
}, "strip", z.ZodTypeAny, {
    code: duplicationErrorCode;
    type: "message" | "sequence" | "action";
    where: string;
    what: string;
    who: string;
}, {
    code: duplicationErrorCode;
    type: "message" | "sequence" | "action";
    where: string;
    what: string;
    who: string;
}>;
export declare const dataSchema: z.ZodObject<{
    position: z.ZodOptional<z.ZodObject<{
        x: z.ZodDefault<z.ZodNumber>;
        y: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x?: number | undefined;
        y?: number | undefined;
    }>>;
    zoom: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    publication: z.ZodOptional<z.ZodObject<{
        start: z.ZodString;
        end: z.ZodString;
        versionId: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        versionId: number;
        end: string;
        start: string;
    }, {
        versionId: number;
        end: string;
        start: string;
    }>>;
    duplicationErrors: z.ZodOptional<z.ZodArray<z.ZodObject<{
        where: z.ZodString;
        who: z.ZodString;
        what: z.ZodString;
        type: z.ZodUnion<[z.ZodUnion<[z.ZodLiteral<"sequence">, z.ZodLiteral<"message">]>, z.ZodLiteral<"action">]>;
        code: z.ZodNativeEnum<typeof duplicationErrorCode>;
    }, "strip", z.ZodTypeAny, {
        code: duplicationErrorCode;
        type: "message" | "sequence" | "action";
        where: string;
        what: string;
        who: string;
    }, {
        code: duplicationErrorCode;
        type: "message" | "sequence" | "action";
        where: string;
        what: string;
        who: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    duplicationErrors?: {
        code: duplicationErrorCode;
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
}, {
    duplicationErrors?: {
        code: duplicationErrorCode;
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
}>;
export declare const CreateFlowSchema: z.ZodObject<{
    machineId: z.ZodNumber;
    whatsappApi: z.ZodNativeEnum<typeof whatsappApi>;
    name: z.ZodOptional<z.ZodString>;
    data: z.ZodOptional<z.ZodObject<{
        position: z.ZodOptional<z.ZodObject<{
            x: z.ZodDefault<z.ZodNumber>;
            y: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x?: number | undefined;
            y?: number | undefined;
        }>>;
        zoom: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        publication: z.ZodOptional<z.ZodObject<{
            start: z.ZodString;
            end: z.ZodString;
            versionId: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            versionId: number;
            end: string;
            start: string;
        }, {
            versionId: number;
            end: string;
            start: string;
        }>>;
        duplicationErrors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            where: z.ZodString;
            who: z.ZodString;
            what: z.ZodString;
            type: z.ZodUnion<[z.ZodUnion<[z.ZodLiteral<"sequence">, z.ZodLiteral<"message">]>, z.ZodLiteral<"action">]>;
            code: z.ZodNativeEnum<typeof duplicationErrorCode>;
        }, "strip", z.ZodTypeAny, {
            code: duplicationErrorCode;
            type: "message" | "sequence" | "action";
            where: string;
            what: string;
            who: string;
        }, {
            code: duplicationErrorCode;
            type: "message" | "sequence" | "action";
            where: string;
            what: string;
            who: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        duplicationErrors?: {
            code: duplicationErrorCode;
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
    }, {
        duplicationErrors?: {
            code: duplicationErrorCode;
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
    }>>;
}, "strip", z.ZodTypeAny, {
    data?: {
        duplicationErrors?: {
            code: duplicationErrorCode;
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
}, {
    data?: {
        duplicationErrors?: {
            code: duplicationErrorCode;
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
}>;
export declare const EditFlowSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    data: z.ZodOptional<z.ZodObject<{
        position: z.ZodOptional<z.ZodObject<{
            x: z.ZodDefault<z.ZodNumber>;
            y: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x?: number | undefined;
            y?: number | undefined;
        }>>;
        zoom: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        publication: z.ZodOptional<z.ZodObject<{
            start: z.ZodString;
            end: z.ZodString;
            versionId: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            versionId: number;
            end: string;
            start: string;
        }, {
            versionId: number;
            end: string;
            start: string;
        }>>;
        duplicationErrors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            where: z.ZodString;
            who: z.ZodString;
            what: z.ZodString;
            type: z.ZodUnion<[z.ZodUnion<[z.ZodLiteral<"sequence">, z.ZodLiteral<"message">]>, z.ZodLiteral<"action">]>;
            code: z.ZodNativeEnum<typeof duplicationErrorCode>;
        }, "strip", z.ZodTypeAny, {
            code: duplicationErrorCode;
            type: "message" | "sequence" | "action";
            where: string;
            what: string;
            who: string;
        }, {
            code: duplicationErrorCode;
            type: "message" | "sequence" | "action";
            where: string;
            what: string;
            who: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        duplicationErrors?: {
            code: duplicationErrorCode;
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
    }, {
        duplicationErrors?: {
            code: duplicationErrorCode;
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
    }>>;
    status: z.ZodOptional<z.ZodNativeEnum<typeof flowStatus>>;
}, "strip", z.ZodTypeAny, {
    data?: {
        duplicationErrors?: {
            code: duplicationErrorCode;
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
}, {
    data?: {
        duplicationErrors?: {
            code: duplicationErrorCode;
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
}>;
export declare const ListFlowByMachineIdSchema: z.ZodObject<{
    machineId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    machineId: number;
}, {
    machineId: number;
}>;
export declare const SetInitialSequenceSchema: z.ZodObject<{
    flowId: z.ZodString;
    sequenceId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    flowId: string;
    sequenceId: string;
}, {
    flowId: string;
    sequenceId: string;
}>;
export declare const PublishFlowSchema: z.ZodObject<{
    flowId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    flowId: string;
}, {
    flowId: string;
}>;
export declare const PublishFromLeadloversSchema: z.ZodObject<{
    fromMachineId: z.ZodNumber;
    toMachineId: z.ZodNumber;
    whatsappApi: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    whatsappApi: boolean;
    fromMachineId: number;
    toMachineId: number;
}, {
    whatsappApi: boolean;
    fromMachineId: number;
    toMachineId: number;
}>;
export declare const CheckWhatsappAuthenticationSchema: z.ZodObject<{
    machineId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    machineId: number;
}, {
    machineId: number;
}>;
export declare const ListAllNodesSchema: z.ZodObject<{
    flowId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    flowId: string;
}, {
    flowId: string;
}>;
declare const NodesOutputSchema: z.ZodObject<z.extendShape<{
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
    data: z.ZodObject<z.extendShape<{
        sequence: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            machineId: z.ZodNumber;
            collapsed: z.ZodDefault<z.ZodBoolean>;
            needSorting: z.ZodDefault<z.ZodBoolean>;
            amountMessages: z.ZodDefault<z.ZodNumber>;
            amountActions: z.ZodDefault<z.ZodNumber>;
            childrenEdges: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            childrenNodes: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            childrenEdgesDifferentSequence: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            childrenNodesCloudButtonReply: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            childrenEdgesCloudButtonReply: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            duplicationErrors: z.ZodOptional<z.ZodArray<z.ZodObject<{
                where: z.ZodLiteral<"message">;
                what: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                where: "message";
                what: string;
            }, {
                where: "message";
                what: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>>;
        reply: z.ZodOptional<z.ZodObject<{
            messageId: z.ZodDefault<z.ZodString>;
            childrenReplyTrigger: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            messageId: string;
            childrenReplyTrigger: string[];
        }, {
            messageId?: string | undefined;
            childrenReplyTrigger?: string[] | undefined;
        }>>;
    }, {
        message: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodObject<{
            machineId: z.ZodNumber;
            height: z.ZodDefault<z.ZodNumber>;
            type: z.ZodNativeEnum<typeof import("../../..").messageType>;
            name: z.ZodString;
            timer: z.ZodDefault<z.ZodObject<{
                timeToNextMessage: z.ZodObject<{
                    days: z.ZodString;
                    hours: z.ZodString;
                    minutes: z.ZodString;
                    seconds: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    days: string;
                    hours: string;
                    minutes: string;
                    seconds: string;
                }, {
                    days: string;
                    hours: string;
                    minutes: string;
                    seconds: string;
                }>;
                initialSendingHour: z.ZodObject<{
                    hour: z.ZodString;
                    minute: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    hour: string;
                    minute: string;
                }, {
                    hour: string;
                    minute: string;
                }>;
                finalSendingHour: z.ZodObject<{
                    hour: z.ZodString;
                    minute: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    hour: string;
                    minute: string;
                }, {
                    hour: string;
                    minute: string;
                }>;
                weekdays: z.ZodString;
                taskFixedDate: z.ZodOptional<z.ZodObject<{
                    day: z.ZodString;
                    month: z.ZodString;
                    year: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    day: string;
                    month: string;
                    year: string;
                }, {
                    day: string;
                    month: string;
                    year: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
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
            }, {
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
            }>>;
            active: z.ZodDefault<z.ZodBoolean>;
            openMessage: z.ZodOptional<z.ZodObject<{
                text: z.ZodString;
                enableLinkPreview: z.ZodDefault<z.ZodBoolean>;
                keepOriginalLink: z.ZodDefault<z.ZodBoolean>;
                buttons: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    text: z.ZodString;
                    url: z.ZodDefault<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    text: string;
                    url: string;
                }, {
                    url?: string | undefined;
                    id: string;
                    text: string;
                }>, "many">>;
                buttonCta: z.ZodOptional<z.ZodObject<{
                    text: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    text: string;
                    url: string;
                }, {
                    text: string;
                    url: string;
                }>>;
                attachments: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodString;
                    url: z.ZodString;
                    type: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    id: string;
                    url: string;
                    name: string;
                }, {
                    type: string;
                    id: string;
                    url: string;
                    name: string;
                }>, "many">>;
                audios: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodString;
                    url: z.ZodString;
                    type: z.ZodString;
                    size: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    id: string;
                    url: string;
                    name: string;
                    size: number;
                }, {
                    type: string;
                    id: string;
                    url: string;
                    name: string;
                    size: number;
                }>, "many">>;
                contacts: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                messagesToForward: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linksPreview: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    linkId: z.ZodString;
                    title: z.ZodString;
                    description: z.ZodString;
                    body: z.ZodString;
                    link: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    linkId: string;
                    title: string;
                    description: string;
                    body: string;
                    link: string;
                }, {
                    linkId: string;
                    title: string;
                    description: string;
                    body: string;
                    link: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
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
            }, {
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
            }>>;
            templateMessage: z.ZodOptional<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                text: z.ZodString;
                buttons: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    text: z.ZodString;
                    url: z.ZodDefault<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    text: string;
                    url: string;
                }, {
                    url?: string | undefined;
                    id: string;
                    text: string;
                }>, "many">>;
                tags: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodString;
                    value: z.ZodDefault<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    id: string;
                    name: string;
                }, {
                    value?: string | undefined;
                    id: string;
                    name: string;
                }>, "many">;
                hasAttachments: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodLiteral<"video">, z.ZodLiteral<"image">]>, z.ZodLiteral<"document">]>>;
            }, "strip", z.ZodTypeAny, {
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
            }, {
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
            }>>;
            labels: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                id: string;
            }, {
                type: string;
                id: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
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
            type: import("../../..").messageType;
            name: string;
            machineId: number;
            height: number;
            timer: {
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
            };
            active: boolean;
        }, {
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
            type: import("../../..").messageType;
            name: string;
            machineId: number;
        }>, {
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
            type: import("../../..").messageType;
            name: string;
            machineId: number;
            height: number;
            active: boolean;
        }, {
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
            type: import("../../..").messageType;
            name: string;
            machineId: number;
        }>, {
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
            type: import("../../..").messageType;
            name: string;
            machineId: number;
            height: number;
            active: boolean;
        }, {
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
            type: import("../../..").messageType;
            name: string;
            machineId: number;
        }>>;
        trigger: z.ZodOptional<z.ZodObject<z.extendShape<{
            teste: z.ZodBoolean;
            machineId: z.ZodNumber;
            sequenceId: z.ZodString;
            messageId: z.ZodString;
            duplicationErrors: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
                where: z.ZodLiteral<"actions">;
                what: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                where: "actions";
                what: string;
            }, {
                where: "actions";
                what: string;
            }>, "many">>>;
            buttonId: z.ZodOptional<z.ZodString>;
            height: z.ZodDefault<z.ZodNumber>;
            event: z.ZodNativeEnum<typeof import("../../..").eventType>;
            answer: z.ZodOptional<z.ZodString>;
            actions: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                type: z.ZodNativeEnum<typeof import("../../..").actionType>;
                matchConditionals: z.ZodOptional<z.ZodBoolean>;
                tagsToApply: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    name: string;
                }, {
                    id: number;
                    name: string;
                }>, "many">>;
                tagsToRemove: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    name: string;
                }, {
                    id: number;
                    name: string;
                }>, "many">>;
                score: z.ZodOptional<z.ZodNumber>;
                move: z.ZodOptional<z.ZodObject<{
                    machine: z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        name: string;
                    }, {
                        id: number;
                        name: string;
                    }>;
                    funnel: z.ZodObject<{
                        id: z.ZodDefault<z.ZodNumber>;
                        name: z.ZodString;
                        nodeId: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        nodeId?: string | undefined;
                        id: number;
                        name: string;
                    }, {
                        id?: number | undefined;
                        nodeId?: string | undefined;
                        name: string;
                    }>;
                    message: z.ZodOptional<z.ZodObject<{
                        id: z.ZodDefault<z.ZodNumber>;
                        name: z.ZodString;
                        nodeId: z.ZodOptional<z.ZodString>;
                        index: z.ZodOptional<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        nodeId?: string | undefined;
                        index?: number | undefined;
                        id: number;
                        name: string;
                    }, {
                        id?: number | undefined;
                        nodeId?: string | undefined;
                        index?: number | undefined;
                        name: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
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
                }, {
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
                }>>;
                assign: z.ZodOptional<z.ZodObject<{
                    to: z.ZodEnum<["attendant", "team"]>;
                    id: z.ZodNumber;
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    name: string;
                    to: "attendant" | "team";
                }, {
                    id: number;
                    name: string;
                    to: "attendant" | "team";
                }>>;
                field: z.ZodOptional<z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    name: string;
                }, {
                    id: number;
                    name: string;
                }>>;
                product: z.ZodOptional<z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    name: string;
                }, {
                    id: number;
                    name: string;
                }>>;
                crm: z.ZodOptional<z.ZodObject<{
                    board: z.ZodOptional<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        name: string;
                    }, {
                        id: number;
                        name: string;
                    }>>;
                    column: z.ZodOptional<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        name: string;
                    }, {
                        id: number;
                        name: string;
                    }>>;
                    group: z.ZodOptional<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        name: string;
                    }, {
                        id: number;
                        name: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
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
                }, {
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
                }>>;
            }, "strip", z.ZodTypeAny, {
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
                type: import("../../..").actionType;
                id: string;
            }, {
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
                type: import("../../..").actionType;
                id: string;
            }>, "many">;
            timer: z.ZodOptional<z.ZodObject<{
                days: z.ZodDefault<z.ZodNumber>;
                hours: z.ZodDefault<z.ZodNumber>;
                minutes: z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                days: number;
                hours: number;
                minutes: number;
            }, {
                days?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            }>>;
            active: z.ZodOptional<z.ZodBoolean>;
            filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodNumber;
                score: z.ZodOptional<z.ZodNumber>;
                tagId: z.ZodOptional<z.ZodNumber>;
                closeWindow: z.ZodOptional<z.ZodBoolean>;
                tagOperatorAnd: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                score?: number | undefined;
                tagId?: number | undefined;
                closeWindow?: boolean | undefined;
                tagOperatorAnd?: boolean | undefined;
                type: number;
            }, {
                score?: number | undefined;
                tagId?: number | undefined;
                closeWindow?: boolean | undefined;
                tagOperatorAnd?: boolean | undefined;
                type: number;
            }>, "many">>;
        }, {
            actions: z.ZodEffects<z.ZodArray<z.ZodObject<z.extendShape<Omit<{
                id: z.ZodString;
                type: z.ZodNativeEnum<typeof import("../../..").actionType>;
                matchConditionals: z.ZodOptional<z.ZodBoolean>;
                tagsToApply: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    name: string;
                }, {
                    id: number;
                    name: string;
                }>, "many">>;
                tagsToRemove: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    name: string;
                }, {
                    id: number;
                    name: string;
                }>, "many">>;
                score: z.ZodOptional<z.ZodNumber>;
                move: z.ZodOptional<z.ZodObject<{
                    machine: z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        name: string;
                    }, {
                        id: number;
                        name: string;
                    }>;
                    funnel: z.ZodObject<{
                        id: z.ZodDefault<z.ZodNumber>;
                        name: z.ZodString;
                        nodeId: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        nodeId?: string | undefined;
                        id: number;
                        name: string;
                    }, {
                        id?: number | undefined;
                        nodeId?: string | undefined;
                        name: string;
                    }>;
                    message: z.ZodOptional<z.ZodObject<{
                        id: z.ZodDefault<z.ZodNumber>;
                        name: z.ZodString;
                        nodeId: z.ZodOptional<z.ZodString>;
                        index: z.ZodOptional<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        nodeId?: string | undefined;
                        index?: number | undefined;
                        id: number;
                        name: string;
                    }, {
                        id?: number | undefined;
                        nodeId?: string | undefined;
                        index?: number | undefined;
                        name: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
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
                }, {
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
                }>>;
                assign: z.ZodOptional<z.ZodObject<{
                    to: z.ZodEnum<["attendant", "team"]>;
                    id: z.ZodNumber;
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    name: string;
                    to: "attendant" | "team";
                }, {
                    id: number;
                    name: string;
                    to: "attendant" | "team";
                }>>;
                field: z.ZodOptional<z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    name: string;
                }, {
                    id: number;
                    name: string;
                }>>;
                product: z.ZodOptional<z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    name: string;
                }, {
                    id: number;
                    name: string;
                }>>;
                crm: z.ZodOptional<z.ZodObject<{
                    board: z.ZodOptional<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        name: string;
                    }, {
                        id: number;
                        name: string;
                    }>>;
                    column: z.ZodOptional<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        name: string;
                    }, {
                        id: number;
                        name: string;
                    }>>;
                    group: z.ZodOptional<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        name: string;
                    }, {
                        id: number;
                        name: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
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
                }, {
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
                }>>;
            }, "tagsToApply" | "tagsToRemove">, {
                tag: z.ZodOptional<z.ZodNumber>;
                name: z.ZodOptional<z.ZodString>;
                actionReactFlowId: z.ZodOptional<z.ZodString>;
                leadloversId: z.ZodOptional<z.ZodNumber>;
            }>, "strip", z.ZodTypeAny, {
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
                type: import("../../..").actionType;
                id: string;
            }, {
                name?: string | undefined;
                matchConditionals?: boolean | undefined;
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
                tag?: number | undefined;
                actionReactFlowId?: string | undefined;
                leadloversId?: number | undefined;
                type: import("../../..").actionType;
                id: string;
            }>, "many">, {
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
                type: import("../../..").actionType;
                id: string;
            }[], {
                name?: string | undefined;
                matchConditionals?: boolean | undefined;
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
                tag?: number | undefined;
                actionReactFlowId?: string | undefined;
                leadloversId?: number | undefined;
                type: import("../../..").actionType;
                id: string;
            }[]>;
        }>, "strip", z.ZodTypeAny, {
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
                type: import("../../..").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("../../..").eventType;
        }, {
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
                name?: string | undefined;
                matchConditionals?: boolean | undefined;
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
                tag?: number | undefined;
                actionReactFlowId?: string | undefined;
                leadloversId?: number | undefined;
                type: import("../../..").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("../../..").eventType;
        }>>;
        versionId: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
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
            type: import("../../..").messageType;
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
                type: import("../../..").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("../../..").eventType;
        } | undefined;
    }, {
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
            type: import("../../..").messageType;
            name: string;
            machineId: number;
        } | undefined;
        versionId?: number | undefined;
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
                name?: string | undefined;
                matchConditionals?: boolean | undefined;
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
                tag?: number | undefined;
                actionReactFlowId?: string | undefined;
                leadloversId?: number | undefined;
                type: import("../../..").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("../../..").eventType;
        } | undefined;
    }>;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>;
}>, "strip", z.ZodTypeAny, {
    height?: number | null | undefined;
    width?: number | null | undefined;
    versionId: number;
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
            type: import("../../..").messageType;
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
                type: import("../../..").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("../../..").eventType;
        } | undefined;
    };
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
    position: {
        x: number;
        y: number;
    };
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
            type: import("../../..").messageType;
            name: string;
            machineId: number;
        } | undefined;
        versionId?: number | undefined;
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
                name?: string | undefined;
                matchConditionals?: boolean | undefined;
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
                tag?: number | undefined;
                actionReactFlowId?: string | undefined;
                leadloversId?: number | undefined;
                type: import("../../..").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("../../..").eventType;
        } | undefined;
    };
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
    position: {
        x: number;
        y: number;
    };
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
declare const NodesDBOutputSchema: z.ZodObject<z.extendShape<{
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
    data: z.ZodString;
    position: z.ZodString;
    leadloversId: z.ZodNullable<z.ZodNumber>;
    versionId: z.ZodNumber;
    internReferenceId: z.ZodNullable<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
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
    internReferenceId: string | null;
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
    internReferenceId: string | null;
}>;
declare const FlowDbOutputSchema: z.ZodObject<z.extendShape<{
    id: z.ZodString;
    machineId: z.ZodNumber;
    whatsappApi: z.ZodString;
    status: z.ZodString;
    initialSequence: z.ZodNullable<z.ZodString>;
    data: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodNullable<z.ZodDate>;
}, {
    nodes: z.ZodOptional<z.ZodArray<z.ZodObject<z.extendShape<{
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
        data: z.ZodString;
        position: z.ZodString;
        leadloversId: z.ZodNullable<z.ZodNumber>;
        versionId: z.ZodNumber;
        internReferenceId: z.ZodNullable<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
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
        internReferenceId: string | null;
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
        internReferenceId: string | null;
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
        internReferenceId: string | null;
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
}, {
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
        internReferenceId: string | null;
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
}>;
export declare const FlowMutationOutputSchema: z.ZodEffects<z.ZodObject<{
    id: z.ZodString;
    machineId: z.ZodNumber;
    whatsappApi: z.ZodString;
    status: z.ZodString;
    initialSequence: z.ZodNullable<z.ZodString>;
    data: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodNullable<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    data: string | null;
    status: string;
    id: string;
    name: string | null;
    machineId: number;
    whatsappApi: string;
    initialSequence: string | null;
    createdAt: Date;
    updatedAt: Date | null;
}, {
    data: string | null;
    status: string;
    id: string;
    name: string | null;
    machineId: number;
    whatsappApi: string;
    initialSequence: string | null;
    createdAt: Date;
    updatedAt: Date | null;
}>, {
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
            code: duplicationErrorCode;
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
}, {
    data: string | null;
    status: string;
    id: string;
    name: string | null;
    machineId: number;
    whatsappApi: string;
    initialSequence: string | null;
    createdAt: Date;
    updatedAt: Date | null;
}>;
export declare const FlowQueryOutputSchema: z.ZodEffects<z.ZodEffects<z.ZodObject<z.extendShape<{
    id: z.ZodString;
    machineId: z.ZodNumber;
    whatsappApi: z.ZodString;
    status: z.ZodString;
    initialSequence: z.ZodNullable<z.ZodString>;
    data: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodNullable<z.ZodDate>;
}, {
    nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
}, {
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
}>, {
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
} | {
    data: {
        duplicationErrors?: {
            code: duplicationErrorCode;
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
    status: string;
    id: string;
    name: string | null;
    machineId: number;
    whatsappApi: string;
    initialSequence: string | null;
    createdAt: Date;
    updatedAt: Date | null;
}, {
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
}>, {
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
                type: import("../../..").messageType;
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
                    type: import("../../..").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("../../..").eventType;
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
                type: import("../../..").messageType;
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
                    type: import("../../..").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("../../..").eventType;
            } | undefined;
        } | {
            x: number;
            y: number;
        } | null;
    }[] | undefined;
    data: {
        duplicationErrors?: {
            code: duplicationErrorCode;
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
}, {
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
}>;
export declare const FlowOutputSchema: z.ZodObject<z.extendShape<{
    id: z.ZodString;
    machineId: z.ZodNumber;
    whatsappApi: z.ZodString;
    status: z.ZodString;
    initialSequence: z.ZodNullable<z.ZodString>;
    data: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodNullable<z.ZodDate>;
}, {
    nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
    data: z.ZodNullable<z.ZodObject<{
        position: z.ZodOptional<z.ZodObject<{
            x: z.ZodDefault<z.ZodNumber>;
            y: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x?: number | undefined;
            y?: number | undefined;
        }>>;
        zoom: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        publication: z.ZodOptional<z.ZodObject<{
            start: z.ZodString;
            end: z.ZodString;
            versionId: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            versionId: number;
            end: string;
            start: string;
        }, {
            versionId: number;
            end: string;
            start: string;
        }>>;
        duplicationErrors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            where: z.ZodString;
            who: z.ZodString;
            what: z.ZodString;
            type: z.ZodUnion<[z.ZodUnion<[z.ZodLiteral<"sequence">, z.ZodLiteral<"message">]>, z.ZodLiteral<"action">]>;
            code: z.ZodNativeEnum<typeof duplicationErrorCode>;
        }, "strip", z.ZodTypeAny, {
            code: duplicationErrorCode;
            type: "message" | "sequence" | "action";
            where: string;
            what: string;
            who: string;
        }, {
            code: duplicationErrorCode;
            type: "message" | "sequence" | "action";
            where: string;
            what: string;
            who: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        duplicationErrors?: {
            code: duplicationErrorCode;
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
    }, {
        duplicationErrors?: {
            code: duplicationErrorCode;
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
    }>>;
}>, "strip", z.ZodTypeAny, {
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
    data: {
        duplicationErrors?: {
            code: duplicationErrorCode;
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
    } | null;
    status: string;
    id: string;
    name: string | null;
    machineId: number;
    whatsappApi: string;
    initialSequence: string | null;
    createdAt: Date;
    updatedAt: Date | null;
}, {
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
    data: {
        duplicationErrors?: {
            code: duplicationErrorCode;
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
    } | null;
    status: string;
    id: string;
    name: string | null;
    machineId: number;
    whatsappApi: string;
    initialSequence: string | null;
    createdAt: Date;
    updatedAt: Date | null;
}>;
export declare const PublishFlowOutputSchema: z.ZodObject<{
    status: z.ZodString;
    start: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: string;
    start: string;
}, {
    status: string;
    start: string;
}>;
export declare const PublishFromLeadloversOutputSchema: z.ZodObject<{
    status: z.ZodEnum<["success", "error"]>;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    status: "error" | "success";
}, {
    message: string;
    status: "error" | "success";
}>;
export declare const CheckWhatsappAuthenticationOutputSchema: z.ZodObject<{
    isCloudApi: z.ZodBoolean;
    authentication: z.ZodEnum<[whatsappApi.CLOUD_API, whatsappApi.QRCODE]>;
}, "strip", z.ZodTypeAny, {
    isCloudApi: boolean;
    authentication: whatsappApi.CLOUD_API | whatsappApi.QRCODE;
}, {
    isCloudApi: boolean;
    authentication: whatsappApi.CLOUD_API | whatsappApi.QRCODE;
}>;
export declare const ListAllNodesOutputSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    type: z.ZodEnum<["sequence", "message"]>;
    name: z.ZodString;
    text: z.ZodOptional<z.ZodString>;
    parentNode: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    text?: string | undefined;
    parentNode?: string | undefined;
    type: "message" | "sequence";
    id: string;
    name: string;
}, {
    text?: string | undefined;
    parentNode?: string | undefined;
    type: "message" | "sequence";
    id: string;
    name: string;
}>, "many">;
export type FlowDuplicationError = z.infer<typeof duplicationError>;
export type FlowData = z.infer<typeof dataSchema>;
export type CreateFlowDTO = z.infer<typeof CreateFlowSchema>;
export type EditFlowDTO = z.infer<typeof EditFlowSchema>;
export type ListFlowByMachineIdDTO = z.infer<typeof ListFlowByMachineIdSchema>;
export type SetInitialSequenceDTO = z.infer<typeof SetInitialSequenceSchema>;
export type PublishFlowDTO = z.infer<typeof PublishFlowSchema>;
export type PublishFromLeadloversDTO = z.infer<typeof PublishFromLeadloversSchema>;
export type NodeFromFlowDbOutputDTO = z.infer<typeof NodesDBOutputSchema>;
export type NodeFromFlowOutputDTO = z.infer<typeof NodesOutputSchema>;
export type FlowDbOutputDTO = z.infer<typeof FlowDbOutputSchema>;
export type FlowMutationDTO = z.infer<typeof FlowMutationOutputSchema>;
export type FlowQueryDTO = z.infer<typeof FlowQueryOutputSchema>;
export type FlowDTO = z.infer<typeof FlowOutputSchema>;
export type PublishFlowOutputDTO = z.infer<typeof PublishFlowOutputSchema>;
export type PublishFromLeadloversOutputDTO = z.infer<typeof PublishFromLeadloversOutputSchema>;
export type ListAllNodesDTO = z.infer<typeof ListAllNodesSchema>;
export type ListAllNodesOutputDTO = z.infer<typeof ListAllNodesOutputSchema>;
export {};
