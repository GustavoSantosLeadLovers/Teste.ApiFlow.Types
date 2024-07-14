import { z } from 'zod';
import { nodeType } from './node.dto';
export declare const ListNodeByIdData: z.ZodObject<{
    id: z.ZodString;
    flowId: z.ZodString;
    versionId: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    versionId?: number | undefined;
    flowId: string;
    id: string;
}, {
    versionId?: number | undefined;
    flowId: string;
    id: string;
}>;
export declare const CreateNodeSchema: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodObject<z.extendShape<{
    parentNode: z.ZodOptional<z.ZodString>;
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
    type: z.ZodNativeEnum<typeof nodeType>;
    draggable: z.ZodOptional<z.ZodBoolean>;
    style: z.ZodOptional<z.ZodString>;
    className: z.ZodOptional<z.ZodString>;
    targetPosition: z.ZodOptional<z.ZodEnum<["left", "right", "top", "bottom"]>>;
    sourcePosition: z.ZodOptional<z.ZodEnum<["left", "right", "top", "bottom"]>>;
    hidden: z.ZodOptional<z.ZodBoolean>;
    selected: z.ZodOptional<z.ZodBoolean>;
    dragging: z.ZodOptional<z.ZodBoolean>;
    selectable: z.ZodOptional<z.ZodBoolean>;
    connectable: z.ZodOptional<z.ZodBoolean>;
    deletable: z.ZodOptional<z.ZodBoolean>;
    focusable: z.ZodOptional<z.ZodBoolean>;
    dragHandle: z.ZodOptional<z.ZodString>;
    width: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    height: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    zIndex: z.ZodOptional<z.ZodNumber>;
    extent: z.ZodOptional<z.ZodString>;
    expandParent: z.ZodOptional<z.ZodBoolean>;
    positionAbsolute: z.ZodOptional<z.ZodString>;
    ariaLabel: z.ZodOptional<z.ZodString>;
}, {
    id: z.ZodString;
    flowId: z.ZodString;
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
            type: z.ZodNativeEnum<typeof import("./message.dto").messageType>;
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
            type: import("./message.dto").messageType;
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
            type: import("./message.dto").messageType;
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
            type: import("./message.dto").messageType;
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
            type: import("./message.dto").messageType;
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
            type: import("./message.dto").messageType;
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
            type: import("./message.dto").messageType;
            name: string;
            machineId: number;
        }>>;
        trigger: z.ZodOptional<z.ZodEffects<z.ZodObject<z.extendShape<{
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
            event: z.ZodNativeEnum<typeof import("./trigger.dto").eventType>;
            answer: z.ZodOptional<z.ZodString>;
            actions: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                type: z.ZodNativeEnum<typeof import("./action.dto").actionType>;
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
                type: import("./action.dto").actionType;
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
                type: import("./action.dto").actionType;
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
            actions: z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodObject<{
                id: z.ZodString;
                type: z.ZodNativeEnum<typeof import("./action.dto").actionType>;
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
                type: import("./action.dto").actionType;
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
                type: import("./action.dto").actionType;
                id: string;
            }>, {
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
                type: import("./action.dto").actionType;
                id: string;
            }>, "many">, {
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
                type: import("./action.dto").actionType;
                id: string;
            }[], {
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
                type: import("./action.dto").actionType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        }>, {
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        }>>;
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
    type: nodeType;
    id: string;
    position: {
        x: number;
        y: number;
    };
}, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
    type: nodeType;
    id: string;
    position: {
        x: number;
        y: number;
    };
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
    type: nodeType;
    id: string;
    position: {
        x: number;
        y: number;
    };
}, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
    type: nodeType;
    id: string;
    position: {
        x: number;
        y: number;
    };
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
    type: nodeType;
    id: string;
    position: {
        x: number;
        y: number;
    };
}, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
    type: nodeType;
    id: string;
    position: {
        x: number;
        y: number;
    };
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
    type: nodeType;
    id: string;
    position: {
        x: number;
        y: number;
    };
}, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    };
    type: nodeType;
    id: string;
    position: {
        x: number;
        y: number;
    };
}>;
export declare const CreateNodesSchema: z.ZodObject<{
    flowId: z.ZodString;
    nodes: z.ZodArray<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodObject<z.extendShape<{
        parentNode: z.ZodOptional<z.ZodString>;
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
        type: z.ZodNativeEnum<typeof nodeType>;
        draggable: z.ZodOptional<z.ZodBoolean>;
        style: z.ZodOptional<z.ZodString>;
        className: z.ZodOptional<z.ZodString>;
        targetPosition: z.ZodOptional<z.ZodEnum<["left", "right", "top", "bottom"]>>;
        sourcePosition: z.ZodOptional<z.ZodEnum<["left", "right", "top", "bottom"]>>;
        hidden: z.ZodOptional<z.ZodBoolean>;
        selected: z.ZodOptional<z.ZodBoolean>;
        dragging: z.ZodOptional<z.ZodBoolean>;
        selectable: z.ZodOptional<z.ZodBoolean>;
        connectable: z.ZodOptional<z.ZodBoolean>;
        deletable: z.ZodOptional<z.ZodBoolean>;
        focusable: z.ZodOptional<z.ZodBoolean>;
        dragHandle: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        height: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        zIndex: z.ZodOptional<z.ZodNumber>;
        extent: z.ZodOptional<z.ZodString>;
        expandParent: z.ZodOptional<z.ZodBoolean>;
        positionAbsolute: z.ZodOptional<z.ZodString>;
        ariaLabel: z.ZodOptional<z.ZodString>;
    }, {
        id: z.ZodString;
        flowId: z.ZodString;
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
                type: z.ZodNativeEnum<typeof import("./message.dto").messageType>;
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
                type: import("./message.dto").messageType;
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
                type: import("./message.dto").messageType;
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
                type: import("./message.dto").messageType;
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
                type: import("./message.dto").messageType;
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
                type: import("./message.dto").messageType;
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
                type: import("./message.dto").messageType;
                name: string;
                machineId: number;
            }>>;
            trigger: z.ZodOptional<z.ZodEffects<z.ZodObject<z.extendShape<{
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
                event: z.ZodNativeEnum<typeof import("./trigger.dto").eventType>;
                answer: z.ZodOptional<z.ZodString>;
                actions: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    type: z.ZodNativeEnum<typeof import("./action.dto").actionType>;
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
                    type: import("./action.dto").actionType;
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
                    type: import("./action.dto").actionType;
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
                actions: z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodObject<{
                    id: z.ZodString;
                    type: z.ZodNativeEnum<typeof import("./action.dto").actionType>;
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
                    type: import("./action.dto").actionType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }>, {
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
                    type: import("./action.dto").actionType;
                    id: string;
                }>, "many">, {
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[], {
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
                    type: import("./action.dto").actionType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            }>, {
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            }>>;
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        }>;
    }>, "strip", z.ZodTypeAny, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        type: nodeType;
        id: string;
        position: {
            x: number;
            y: number;
        };
    }, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        type: nodeType;
        id: string;
        position: {
            x: number;
            y: number;
        };
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        type: nodeType;
        id: string;
        position: {
            x: number;
            y: number;
        };
    }, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        type: nodeType;
        id: string;
        position: {
            x: number;
            y: number;
        };
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        type: nodeType;
        id: string;
        position: {
            x: number;
            y: number;
        };
    }, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        type: nodeType;
        id: string;
        position: {
            x: number;
            y: number;
        };
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        type: nodeType;
        id: string;
        position: {
            x: number;
            y: number;
        };
    }, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        type: nodeType;
        id: string;
        position: {
            x: number;
            y: number;
        };
    }>, "many">;
    edges: z.ZodArray<z.ZodEffects<z.ZodEffects<z.ZodObject<z.extendShape<{
        source: z.ZodString;
        target: z.ZodString;
        markerStart: z.ZodDefault<z.ZodString>;
        markerEnd: z.ZodDefault<z.ZodString>;
        sourceParentCode: z.ZodString;
        targetParentCode: z.ZodString;
        type: z.ZodNativeEnum<typeof import("../../edges/dtos/edge.dto").edgeType>;
        sourceHandle: z.ZodOptional<z.ZodString>;
        targetHandle: z.ZodOptional<z.ZodString>;
        label: z.ZodOptional<z.ZodString>;
        labelStyle: z.ZodOptional<z.ZodString>;
        labelShowBg: z.ZodOptional<z.ZodBoolean>;
        labelBgStyle: z.ZodOptional<z.ZodString>;
        labelBgPadding: z.ZodOptional<z.ZodString>;
        labelBgBorderRadius: z.ZodOptional<z.ZodNumber>;
        style: z.ZodOptional<z.ZodString>;
        animated: z.ZodOptional<z.ZodBoolean>;
        hidden: z.ZodOptional<z.ZodBoolean>;
        deletable: z.ZodOptional<z.ZodBoolean>;
        focusable: z.ZodOptional<z.ZodBoolean>;
        data: z.ZodOptional<z.ZodString>;
        className: z.ZodOptional<z.ZodString>;
        sourceNode: z.ZodOptional<z.ZodString>;
        targetNode: z.ZodOptional<z.ZodString>;
        selected: z.ZodOptional<z.ZodBoolean>;
        zIndex: z.ZodOptional<z.ZodNumber>;
        ariaLabel: z.ZodOptional<z.ZodString>;
        interactionWidth: z.ZodOptional<z.ZodNumber>;
    }, {
        id: z.ZodString;
        flowId: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
        type: import("../../edges/dtos/edge.dto").edgeType;
        source: string;
        target: string;
        markerStart: string;
        markerEnd: string;
        id: string;
    }, {
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
        type: import("../../edges/dtos/edge.dto").edgeType;
        source: string;
        target: string;
        id: string;
    }>, {
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
        type: import("../../edges/dtos/edge.dto").edgeType;
        source: string;
        target: string;
        markerStart: string;
        markerEnd: string;
        id: string;
    }, {
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
        type: import("../../edges/dtos/edge.dto").edgeType;
        source: string;
        target: string;
        id: string;
    }>, {
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
        type: import("../../edges/dtos/edge.dto").edgeType;
        source: string;
        target: string;
        markerStart: string;
        markerEnd: string;
        id: string;
    }, {
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
        type: import("../../edges/dtos/edge.dto").edgeType;
        source: string;
        target: string;
        id: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
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
        type: import("../../edges/dtos/edge.dto").edgeType;
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        type: nodeType;
        id: string;
        position: {
            x: number;
            y: number;
        };
    }[];
}, {
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
        type: import("../../edges/dtos/edge.dto").edgeType;
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        };
        type: nodeType;
        id: string;
        position: {
            x: number;
            y: number;
        };
    }[];
}>;
export declare const EditNodeSchema: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodObject<z.extendShape<{
    parentNode: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    position: z.ZodOptional<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>>;
    type: z.ZodOptional<z.ZodNativeEnum<typeof nodeType>>;
    draggable: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    style: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    className: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    targetPosition: z.ZodOptional<z.ZodOptional<z.ZodEnum<["left", "right", "top", "bottom"]>>>;
    sourcePosition: z.ZodOptional<z.ZodOptional<z.ZodEnum<["left", "right", "top", "bottom"]>>>;
    hidden: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    selected: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    dragging: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    selectable: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    connectable: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    deletable: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    focusable: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    dragHandle: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    width: z.ZodOptional<z.ZodOptional<z.ZodDefault<z.ZodNumber>>>;
    height: z.ZodOptional<z.ZodOptional<z.ZodDefault<z.ZodNumber>>>;
    zIndex: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    extent: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    expandParent: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    positionAbsolute: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    ariaLabel: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, {
    id: z.ZodString;
    flowId: z.ZodString;
    data: z.ZodOptional<z.ZodObject<z.extendShape<{
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
            type: z.ZodNativeEnum<typeof import("./message.dto").messageType>;
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
            type: import("./message.dto").messageType;
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
            type: import("./message.dto").messageType;
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
            type: import("./message.dto").messageType;
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
            type: import("./message.dto").messageType;
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
            type: import("./message.dto").messageType;
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
            type: import("./message.dto").messageType;
            name: string;
            machineId: number;
        }>>;
        trigger: z.ZodOptional<z.ZodEffects<z.ZodObject<z.extendShape<{
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
            event: z.ZodNativeEnum<typeof import("./trigger.dto").eventType>;
            answer: z.ZodOptional<z.ZodString>;
            actions: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                type: z.ZodNativeEnum<typeof import("./action.dto").actionType>;
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
                type: import("./action.dto").actionType;
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
                type: import("./action.dto").actionType;
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
            actions: z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodObject<{
                id: z.ZodString;
                type: z.ZodNativeEnum<typeof import("./action.dto").actionType>;
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
                type: import("./action.dto").actionType;
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
                type: import("./action.dto").actionType;
                id: string;
            }>, {
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
                type: import("./action.dto").actionType;
                id: string;
            }>, "many">, {
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
                type: import("./action.dto").actionType;
                id: string;
            }[], {
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
                type: import("./action.dto").actionType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        }>, {
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        }>>;
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    }>>;
}>, "strip", z.ZodTypeAny, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    } | undefined;
    type?: nodeType | undefined;
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
}, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    } | undefined;
    type?: nodeType | undefined;
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
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    } | undefined;
    type?: nodeType | undefined;
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
}, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    } | undefined;
    type?: nodeType | undefined;
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
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    } | undefined;
    type?: nodeType | undefined;
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
}, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    } | undefined;
    type?: nodeType | undefined;
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
}>, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    } | undefined;
    type?: nodeType | undefined;
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
}, {
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
            type: import("./message.dto").messageType;
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
                type: import("./action.dto").actionType;
                id: string;
            }[];
            teste: boolean;
            event: import("./trigger.dto").eventType;
        } | undefined;
    } | undefined;
    type?: nodeType | undefined;
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
}>;
export declare const EditNodesSchema: z.ZodObject<{
    flowId: z.ZodString;
    nodes: z.ZodArray<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodObject<z.extendShape<{
        parentNode: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        position: z.ZodOptional<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>>;
        type: z.ZodOptional<z.ZodNativeEnum<typeof nodeType>>;
        draggable: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        style: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        className: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        targetPosition: z.ZodOptional<z.ZodOptional<z.ZodEnum<["left", "right", "top", "bottom"]>>>;
        sourcePosition: z.ZodOptional<z.ZodOptional<z.ZodEnum<["left", "right", "top", "bottom"]>>>;
        hidden: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        selected: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        dragging: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        selectable: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        connectable: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        deletable: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        focusable: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        dragHandle: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        width: z.ZodOptional<z.ZodOptional<z.ZodDefault<z.ZodNumber>>>;
        height: z.ZodOptional<z.ZodOptional<z.ZodDefault<z.ZodNumber>>>;
        zIndex: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        extent: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        expandParent: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        positionAbsolute: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        ariaLabel: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    }, {
        id: z.ZodString;
        flowId: z.ZodString;
        data: z.ZodOptional<z.ZodObject<z.extendShape<{
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
                type: z.ZodNativeEnum<typeof import("./message.dto").messageType>;
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
                type: import("./message.dto").messageType;
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
                type: import("./message.dto").messageType;
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
                type: import("./message.dto").messageType;
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
                type: import("./message.dto").messageType;
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
                type: import("./message.dto").messageType;
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
                type: import("./message.dto").messageType;
                name: string;
                machineId: number;
            }>>;
            trigger: z.ZodOptional<z.ZodEffects<z.ZodObject<z.extendShape<{
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
                event: z.ZodNativeEnum<typeof import("./trigger.dto").eventType>;
                answer: z.ZodOptional<z.ZodString>;
                actions: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    type: z.ZodNativeEnum<typeof import("./action.dto").actionType>;
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
                    type: import("./action.dto").actionType;
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
                    type: import("./action.dto").actionType;
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
                actions: z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodObject<{
                    id: z.ZodString;
                    type: z.ZodNativeEnum<typeof import("./action.dto").actionType>;
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
                    type: import("./action.dto").actionType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }>, {
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
                    type: import("./action.dto").actionType;
                    id: string;
                }>, "many">, {
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[], {
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
                    type: import("./action.dto").actionType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            }>, {
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            }>>;
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        }>>;
    }>, "strip", z.ZodTypeAny, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        } | undefined;
        type?: nodeType | undefined;
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
    }, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        } | undefined;
        type?: nodeType | undefined;
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
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        } | undefined;
        type?: nodeType | undefined;
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
    }, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        } | undefined;
        type?: nodeType | undefined;
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
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        } | undefined;
        type?: nodeType | undefined;
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
    }, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        } | undefined;
        type?: nodeType | undefined;
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
    }>, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        } | undefined;
        type?: nodeType | undefined;
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
    }, {
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        } | undefined;
        type?: nodeType | undefined;
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
    }>, "many">;
    edges: z.ZodArray<z.ZodEffects<z.ZodEffects<z.ZodObject<z.extendShape<{
        source: z.ZodOptional<z.ZodString>;
        target: z.ZodOptional<z.ZodString>;
        markerStart: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        markerEnd: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        sourceParentCode: z.ZodOptional<z.ZodString>;
        targetParentCode: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodNativeEnum<typeof import("../../edges/dtos/edge.dto").edgeType>>;
        sourceHandle: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        targetHandle: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        label: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        labelStyle: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        labelShowBg: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        labelBgStyle: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        labelBgPadding: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        labelBgBorderRadius: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        style: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        animated: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        hidden: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        deletable: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        focusable: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        data: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        className: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        sourceNode: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        targetNode: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        selected: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        zIndex: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        ariaLabel: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        interactionWidth: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    }, {
        id: z.ZodString;
        flowId: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        data?: string | undefined;
        sourceParentCode?: string | undefined;
        targetParentCode?: string | undefined;
        type?: import("../../edges/dtos/edge.dto").edgeType | undefined;
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
    }, {
        data?: string | undefined;
        sourceParentCode?: string | undefined;
        targetParentCode?: string | undefined;
        type?: import("../../edges/dtos/edge.dto").edgeType | undefined;
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
    }>, {
        reactFlowId: string;
        data?: string | undefined;
        sourceParentCode?: string | undefined;
        targetParentCode?: string | undefined;
        type?: import("../../edges/dtos/edge.dto").edgeType | undefined;
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
    }, {
        data?: string | undefined;
        sourceParentCode?: string | undefined;
        targetParentCode?: string | undefined;
        type?: import("../../edges/dtos/edge.dto").edgeType | undefined;
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
    }>, {
        reactFlowId: string;
        data?: string | undefined;
        sourceParentCode?: string | undefined;
        targetParentCode?: string | undefined;
        type?: import("../../edges/dtos/edge.dto").edgeType | undefined;
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
    }, {
        data?: string | undefined;
        sourceParentCode?: string | undefined;
        targetParentCode?: string | undefined;
        type?: import("../../edges/dtos/edge.dto").edgeType | undefined;
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    flowId: string;
    edges: {
        reactFlowId: string;
        data?: string | undefined;
        sourceParentCode?: string | undefined;
        targetParentCode?: string | undefined;
        type?: import("../../edges/dtos/edge.dto").edgeType | undefined;
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        } | undefined;
        type?: nodeType | undefined;
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
}, {
    flowId: string;
    edges: {
        data?: string | undefined;
        sourceParentCode?: string | undefined;
        targetParentCode?: string | undefined;
        type?: import("../../edges/dtos/edge.dto").edgeType | undefined;
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
                type: import("./message.dto").messageType;
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
                    type: import("./action.dto").actionType;
                    id: string;
                }[];
                teste: boolean;
                event: import("./trigger.dto").eventType;
            } | undefined;
        } | undefined;
        type?: nodeType | undefined;
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
}>;
export declare const EditNodeHiddenSchema: z.ZodObject<{
    flowId: z.ZodString;
    ids: z.ZodArray<z.ZodString, "many">;
    value: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    flowId: string;
    value: boolean;
    ids: string[];
}, {
    flowId: string;
    value: boolean;
    ids: string[];
}>;
export declare const ListNodeByIdSchema: z.ZodObject<{
    id: z.ZodString;
    flowId: z.ZodString;
    versionId: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    versionId?: number | undefined;
    flowId: string;
    id: string;
}, {
    versionId?: number | undefined;
    flowId: string;
    id: string;
}>;
export declare const RemoveNodeSchema: z.ZodObject<{
    id: z.ZodString;
    flowId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    flowId: string;
    id: string;
}, {
    flowId: string;
    id: string;
}>;
export declare const RemoveNodesSchema: z.ZodObject<{
    ids: z.ZodArray<z.ZodString, "many">;
    flowId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    flowId: string;
    ids: string[];
}, {
    flowId: string;
    ids: string[];
}>;
export type CreateNodeDTO = z.infer<typeof CreateNodeSchema>;
export type CreateNodesDTO = z.infer<typeof CreateNodesSchema>;
export type EditNodeDTO = z.infer<typeof EditNodeSchema>;
export type EditNodesDTO = z.infer<typeof EditNodesSchema>;
export type EditNodeHiddenDTO = z.infer<typeof EditNodeHiddenSchema>;
export type ListNodeByIdDTO = z.infer<typeof ListNodeByIdSchema>;
export type RemoveNodeDTO = z.infer<typeof RemoveNodeSchema>;
export type RemoveNodesDTO = z.infer<typeof RemoveNodesSchema>;
