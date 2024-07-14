import { z } from 'zod';
export declare enum messageType {
    OPEN_MESSAGE = "mensagem aberta",
    TEMPLATE_MESSAGE = "template de mensagem"
}
declare const linkPreview: z.ZodObject<{
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
}>;
declare const openMessageData: z.ZodObject<{
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
}>;
declare const templateMessageData: z.ZodObject<{
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
}>;
declare const messageBase: z.ZodEffects<z.ZodObject<{
    machineId: z.ZodNumber;
    height: z.ZodDefault<z.ZodNumber>;
    type: z.ZodNativeEnum<typeof messageType>;
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
    type: messageType;
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
    type: messageType;
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
    type: messageType;
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
    type: messageType;
    name: string;
    machineId: number;
}>;
export declare const createMessageData: z.ZodEffects<z.ZodObject<{
    machineId: z.ZodNumber;
    height: z.ZodDefault<z.ZodNumber>;
    type: z.ZodNativeEnum<typeof messageType>;
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
    type: messageType;
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
    type: messageType;
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
    type: messageType;
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
    type: messageType;
    name: string;
    machineId: number;
}>;
export declare const editMessageData: z.ZodEffects<z.ZodObject<{
    machineId: z.ZodNumber;
    height: z.ZodDefault<z.ZodNumber>;
    type: z.ZodNativeEnum<typeof messageType>;
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
    type: messageType;
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
    type: messageType;
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
    type: messageType;
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
    type: messageType;
    name: string;
    machineId: number;
}>;
export declare const createMessageSchema: z.ZodEffects<z.ZodEffects<z.ZodObject<{
    machineId: z.ZodNumber;
    height: z.ZodDefault<z.ZodNumber>;
    type: z.ZodNativeEnum<typeof messageType>;
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
    type: messageType;
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
    type: messageType;
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
    type: messageType;
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
    type: messageType;
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
    type: messageType;
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
    type: messageType;
    name: string;
    machineId: number;
}>;
export declare const editMessageSchema: z.ZodEffects<z.ZodEffects<z.ZodObject<{
    machineId: z.ZodNumber;
    height: z.ZodDefault<z.ZodNumber>;
    type: z.ZodNativeEnum<typeof messageType>;
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
    type: messageType;
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
    type: messageType;
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
    type: messageType;
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
    type: messageType;
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
    type: messageType;
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
    type: messageType;
    name: string;
    machineId: number;
}>;
export type MessageData = z.infer<typeof messageBase>;
export type LinkPreview = z.infer<typeof linkPreview>;
export type CreateMessage = z.infer<typeof createMessageSchema>;
export type EditMessage = z.infer<typeof editMessageSchema>;
export type OpenMessage = z.infer<typeof openMessageData>;
export type TemplateMessage = z.infer<typeof templateMessageData>;
export {};
