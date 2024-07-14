import { z } from 'zod';
export declare const ListTemplatesSchema: z.ZodObject<{
    machineId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    machineId: number;
}, {
    machineId: number;
}>;
export declare const ListTemplateDetailByIdSchema: z.ZodObject<{
    machineId: z.ZodNumber;
    templateId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    machineId: number;
    templateId: number;
}, {
    machineId: number;
    templateId: number;
}>;
export declare const ListWhatsAppMachineTypeSchema: z.ZodObject<{
    machineId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    machineId: number;
}, {
    machineId: number;
}>;
export declare const AllowCreateFlowByMachineIdSchema: z.ZodObject<{
    machineId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    machineId: number;
}, {
    machineId: number;
}>;
export declare const TestWhatsAppMessageSendingSchema: z.ZodObject<{
    machineId: z.ZodNumber;
    messageId: z.ZodString;
    phoneNumber: z.ZodString;
}, "strip", z.ZodTypeAny, {
    machineId: number;
    messageId: string;
    phoneNumber: string;
}, {
    machineId: number;
    messageId: string;
    phoneNumber: string;
}>;
export declare const ListWhatsAppMessageSendingErrorsSchema: z.ZodObject<{
    machineId: z.ZodNumber;
    flowId: z.ZodString;
    messageId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    flowId: string;
    machineId: number;
    messageId: string;
}, {
    flowId: string;
    machineId: number;
    messageId: string;
}>;
export declare const ListSequencesByMachineIdSchema: z.ZodObject<{
    machineId: z.ZodNumber;
    flowId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    flowId: string;
    machineId: number;
}, {
    flowId: string;
    machineId: number;
}>;
export declare const ListSequenceNumberSchema: z.ZodObject<{
    machineId: z.ZodNumber;
    flowId: z.ZodString;
    sequenceId: z.ZodOptional<z.ZodNumber>;
    parentNode: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    sequenceId?: number | undefined;
    parentNode?: string | undefined;
    flowId: string;
    machineId: number;
}, {
    sequenceId?: number | undefined;
    parentNode?: string | undefined;
    flowId: string;
    machineId: number;
}>;
export declare const ListWhatsAppAccountsSchema: z.ZodObject<{
    flowId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    flowId: string;
}, {
    flowId: string;
}>;
declare const templateSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodNumber;
    accountId: z.ZodNumber;
    templateId: z.ZodString;
    name: z.ZodString;
    text: z.ZodString;
    html: z.ZodString;
    htmlHeader: z.ZodNullable<z.ZodString>;
    htmlFooter: z.ZodNullable<z.ZodString>;
    status: z.ZodNumber;
    language: z.ZodString;
    statusDescription: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    buttons: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
        url: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        text: string;
        url: string | null;
    }, {
        id: string;
        text: string;
        url: string | null;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>;
export declare const ListLeadsFromFunnelsSchema: z.ZodObject<{
    machineId: z.ZodNumber;
    flowId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    flowId: string;
    machineId: number;
}, {
    flowId: string;
    machineId: number;
}>;
export declare const ListFunnelDetailsSchema: z.ZodObject<{
    machineId: z.ZodNumber;
    flowId: z.ZodString;
    sequenceId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    flowId: string;
    sequenceId: string;
    machineId: number;
}, {
    flowId: string;
    sequenceId: string;
    machineId: number;
}>;
export declare const CreateTagToLeadsWithErrorSchema: z.ZodObject<{
    flowId: z.ZodString;
    messageId: z.ZodString;
    tagIds: z.ZodArray<z.ZodNumber, "many">;
}, "strip", z.ZodTypeAny, {
    flowId: string;
    messageId: string;
    tagIds: number[];
}, {
    flowId: string;
    messageId: string;
    tagIds: number[];
}>;
export declare const CreateTagSchema: z.ZodObject<{
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;
export declare const ListWhatsAppQrCodeSchema: z.ZodObject<{
    accountId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    accountId: number;
}, {
    accountId: number;
}>;
export declare const CreateContactSchema: z.ZodObject<{
    name: z.ZodString;
    phone: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    phone: string;
}, {
    name: string;
    phone: string;
}>;
export declare const ListContactByIdSchema: z.ZodObject<{
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
}, {
    id: number;
}>;
export declare const EditContactSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    phone: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    phone: string;
}, {
    id: number;
    name: string;
    phone: string;
}>;
export declare const RemoveContactSchema: z.ZodObject<{
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
}, {
    id: number;
}>;
export declare const VerifyMachineIdLinkWhatsAppAccountSchema: z.ZodObject<{
    machineId: z.ZodNumber;
    accountId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    machineId: number;
    accountId: number;
}, {
    machineId: number;
    accountId: number;
}>;
export declare const ChangeMachineIdLinkAccountSchema: z.ZodObject<{
    accountId: z.ZodNumber;
    machineId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    machineId: number;
    accountId: number;
}, {
    machineId: number;
    accountId: number;
}>;
export declare const CopyContactsWithErrorsSchema: z.ZodObject<{
    copyTo: z.ZodObject<{
        machineId: z.ZodNumber;
        funnelId: z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            nodeId: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id?: number | undefined;
            nodeId?: string | undefined;
        }, {
            id?: number | undefined;
            nodeId?: string | undefined;
        }>;
        levelId: z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            nodeId: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id?: number | undefined;
            nodeId?: string | undefined;
        }, {
            id?: number | undefined;
            nodeId?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        machineId: number;
        funnelId: {
            id?: number | undefined;
            nodeId?: string | undefined;
        };
        levelId: {
            id?: number | undefined;
            nodeId?: string | undefined;
        };
    }, {
        machineId: number;
        funnelId: {
            id?: number | undefined;
            nodeId?: string | undefined;
        };
        levelId: {
            id?: number | undefined;
            nodeId?: string | undefined;
        };
    }>;
    machineId: z.ZodNumber;
    sequenceId: z.ZodString;
    messageId: z.ZodString;
    flowId: z.ZodString;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>;
export declare const ListWhatsAppMachineOutputSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    status: z.ZodNumber;
    type: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: number;
    status: number;
    id: number;
    name: string;
}, {
    type: number;
    status: number;
    id: number;
    name: string;
}>, "many">;
export declare const ListWhatsAppMachineTypeOutputSchema: z.ZodObject<{
    type: z.ZodEnum<["cloud_api", "qrcode"]>;
}, "strip", z.ZodTypeAny, {
    type: "cloud_api" | "qrcode";
}, {
    type: "cloud_api" | "qrcode";
}>;
export declare const AllowCreateFlowByMachineIdOutputSchema: z.ZodObject<{
    allow: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    allow: boolean;
}, {
    allow: boolean;
}>;
export declare const TestWhatsAppMessageSendingOutputSchema: z.ZodObject<{
    status: z.ZodEnum<["success", "error"]>;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    status: "error" | "success";
}, {
    message: string;
    status: "error" | "success";
}>;
export declare const ListWhatsAppMessageSendingErrorsOutputSchema: z.ZodObject<{
    total: z.ZodNumber;
    items: z.ZodArray<z.ZodObject<{
        leadId: z.ZodNumber;
        leadPhone: z.ZodString;
        leadName: z.ZodNullable<z.ZodString>;
        errorCode: z.ZodNumber;
        errorDescription: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        leadId: number;
        leadPhone: string;
        leadName: string | null;
        errorCode: number;
        errorDescription: string;
    }, {
        leadId: number;
        leadPhone: string;
        leadName: string | null;
        errorCode: number;
        errorDescription: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    total: number;
    items: {
        leadId: number;
        leadPhone: string;
        leadName: string | null;
        errorCode: number;
        errorDescription: string;
    }[];
}, {
    total: number;
    items: {
        leadId: number;
        leadPhone: string;
        leadName: string | null;
        errorCode: number;
        errorDescription: string;
    }[];
}>;
export declare const ListWhatsAppMessageErrorsOutputSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    errorCode: z.ZodNumber;
    errorDescription: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    errorCode: number;
    errorDescription: string;
}, {
    id: number;
    errorCode: number;
    errorDescription: string;
}>, "many">;
export declare const ListSequencesByMachineIdOutputSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    type: z.ZodNumber;
    whatsAppGroup: z.ZodBoolean;
    nodeId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    nodeId?: string | undefined;
    type: number;
    id: number;
    name: string;
    whatsAppGroup: boolean;
}, {
    nodeId?: string | undefined;
    type: number;
    id: number;
    name: string;
    whatsAppGroup: boolean;
}>, "many">;
export declare const ListSequenceNumberOutputSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    sequenceNumber: z.ZodNumber;
    subtitle: z.ZodString;
    nodeId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    nodeId?: string | undefined;
    id: number;
    sequenceNumber: number;
    subtitle: string;
}, {
    nodeId?: string | undefined;
    id: number;
    sequenceNumber: number;
    subtitle: string;
}>, "many">;
export declare const ListTagsOutputSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
}, {
    id: number;
    name: string;
}>, "many">;
export declare const ListTemplatesOutputSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodNumber;
    accountId: z.ZodNumber;
    templateId: z.ZodString;
    name: z.ZodString;
    text: z.ZodString;
    html: z.ZodString;
    htmlHeader: z.ZodNullable<z.ZodString>;
    htmlFooter: z.ZodNullable<z.ZodString>;
    status: z.ZodNumber;
    language: z.ZodString;
    statusDescription: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    buttons: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
        url: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        text: string;
        url: string | null;
    }, {
        id: string;
        text: string;
        url: string | null;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>, "many">;
export declare const ListTemplateDetailByIdOutputSchema: z.ZodObject<z.extendShape<Pick<{
    id: z.ZodString;
    userId: z.ZodNumber;
    accountId: z.ZodNumber;
    templateId: z.ZodString;
    name: z.ZodString;
    text: z.ZodString;
    html: z.ZodString;
    htmlHeader: z.ZodNullable<z.ZodString>;
    htmlFooter: z.ZodNullable<z.ZodString>;
    status: z.ZodNumber;
    language: z.ZodString;
    statusDescription: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    buttons: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
        url: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        text: string;
        url: string | null;
    }, {
        id: string;
        text: string;
        url: string | null;
    }>, "many">>;
}, "buttons" | "tags" | "html">, {
    hasAttachments: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodLiteral<"video">, z.ZodLiteral<"image">]>, z.ZodLiteral<"document">]>>;
}>, "strip", z.ZodTypeAny, {
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
}, {
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
}>;
export declare const ListLeadsFromFunnelsOutputSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    leads: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    leads: number;
}, {
    id: string;
    leads: number;
}>, "many">;
export declare const ListFunnelDetailsOutputSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    leads: z.ZodNumber;
    leadsExecToday: z.ZodOptional<z.ZodNumber>;
    leadsLocked: z.ZodOptional<z.ZodNumber>;
    sent: z.ZodOptional<z.ZodNumber>;
    delivered: z.ZodOptional<z.ZodNumber>;
    view: z.ZodOptional<z.ZodNumber>;
    clicked: z.ZodOptional<z.ZodNumber>;
    errors: z.ZodOptional<z.ZodNumber>;
    unsub: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>, "many">;
export declare const ListTeamAttendantsOutputSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
}, {
    id: number;
    name: string;
}>, "many">;
export declare const ListAttendantsOutputSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    email: string;
}, {
    id: number;
    name: string;
    email: string;
}>, "many">;
export declare const ListAllLeadFieldsOutputSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
}, {
    id: number;
    name: string;
}>, "many">;
export declare const ListProductsOutputSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
}, {
    id: number;
    name: string;
}>, "many">;
export declare const ListCRMBoardsOutputSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    columns: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
    }, {
        id: number;
        name: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    columns: {
        id: number;
        name: string;
    }[];
}, {
    id: number;
    name: string;
    columns: {
        id: number;
        name: string;
    }[];
}>, "many">;
export declare const ListCRMGroupsOutputSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
}, {
    id: number;
    name: string;
}>, "many">;
export declare const CreateTagOutputSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
}, {
    id: number;
    name: string;
}>;
export declare const CreateContactOutputSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    phone: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    phone: string;
}, {
    id: number;
    name: string;
    phone: string;
}>;
export declare const ListContactsOutputSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    phone: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    phone: string;
}, {
    id: number;
    name: string;
    phone: string;
}>, "many">;
export declare const ListContactByIdOutputSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    phone: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    phone: string;
}, {
    id: number;
    name: string;
    phone: string;
}>;
export declare const VerifyMachineIdLinkWhatsAppAccountOutputSchema: z.ZodUnion<[z.ZodBoolean, z.ZodString]>;
export declare const ListWhatsAppAccountsOutputSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    phoneNumber: z.ZodNullable<z.ZodString>;
    authenticatedCloudApi: z.ZodBoolean;
    authenticatedQrCode: z.ZodBoolean;
    isCurrentAccount: z.ZodNumber;
    isCloudApi: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    isCloudApi: boolean;
    phoneNumber: string | null;
    authenticatedCloudApi: boolean;
    authenticatedQrCode: boolean;
    isCurrentAccount: number;
}, {
    id: number;
    name: string;
    isCloudApi: boolean;
    phoneNumber: string | null;
    authenticatedCloudApi: boolean;
    authenticatedQrCode: boolean;
    isCurrentAccount: number;
}>, "many">;
export declare const ListWhatsAppQrCodeOutputSchema: z.ZodString;
export type TemplateDTO = z.infer<typeof templateSchema>;
export type ListWhatsAppMachineOutputDTO = z.infer<typeof ListWhatsAppMachineOutputSchema>;
export type ListWhatsAppMachineTypeOutputDTO = z.infer<typeof ListWhatsAppMachineTypeOutputSchema>;
export type ListWhatsAppQrCodeOutputSchemaDTO = z.infer<typeof ListWhatsAppQrCodeOutputSchema>;
export type AllowCreateFlowByMachineIdOutputDTO = z.infer<typeof AllowCreateFlowByMachineIdOutputSchema>;
export type TestWhatsAppMessageSendingOutputDTO = z.infer<typeof TestWhatsAppMessageSendingOutputSchema>;
export type ListWhatsAppMessageSendingErrorsOutputDTO = z.infer<typeof ListWhatsAppMessageSendingErrorsOutputSchema>;
export type ListWhatsAppMessageErrorsOutputDTO = z.infer<typeof ListWhatsAppMessageErrorsOutputSchema>;
export type ListSequencesByMachineIdOutputDTO = z.infer<typeof ListSequencesByMachineIdOutputSchema>;
export type ListSequenceNumberOutputDTO = z.infer<typeof ListSequenceNumberOutputSchema>;
export type ListTagsOutputDTO = z.infer<typeof ListTagsOutputSchema>;
export type ListTemplatesOutputDTO = z.infer<typeof ListTemplatesOutputSchema>;
export type ListTemplateDetailByIdOutputDTO = z.infer<typeof ListTemplateDetailByIdOutputSchema>;
export type ListLeadsFromFunnelsOutputDTO = z.infer<typeof ListLeadsFromFunnelsOutputSchema>;
export type ListFunnelDetailsOutputDTO = z.infer<typeof ListFunnelDetailsOutputSchema>;
export type ListTeamAttendantsOutputDTO = z.infer<typeof ListTeamAttendantsOutputSchema>;
export type ListAttendantsOutputDTO = z.infer<typeof ListAttendantsOutputSchema>;
export type ListAllLeadFieldsOutputDTO = z.infer<typeof ListAllLeadFieldsOutputSchema>;
export type ListProductsOutputDTO = z.infer<typeof ListProductsOutputSchema>;
export type ListCRMBoardsOutputDTO = z.infer<typeof ListCRMBoardsOutputSchema>;
export type ListCRMGroupsOutputDTO = z.infer<typeof ListCRMGroupsOutputSchema>;
export type CreateTagOutputDTO = z.infer<typeof CreateTagOutputSchema>;
export type CreateContactOutputDTO = z.infer<typeof CreateContactOutputSchema>;
export type ListContactsOutputDTO = z.infer<typeof ListContactsOutputSchema>;
export type ListContactByIdOutputDTO = z.infer<typeof ListContactByIdOutputSchema>;
export type ListWhatsAppAccountsOutputDTO = z.infer<typeof ListWhatsAppAccountsOutputSchema>;
export type ListWhatsAppAccountsDTO = z.infer<typeof ListWhatsAppAccountsSchema>;
export type VerifyMachineIdLinkWhatsAppAccountOutputDTO = z.infer<typeof VerifyMachineIdLinkWhatsAppAccountOutputSchema>;
export {};
