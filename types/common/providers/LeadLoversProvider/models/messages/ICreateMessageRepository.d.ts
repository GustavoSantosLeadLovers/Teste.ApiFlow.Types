export type CreateMessage = {
    name: string;
    html: string;
    machineId: number;
    funnelId: number;
    sequenceNumber: number;
    timeToNextMessage: string;
    userId: number;
    active: boolean;
    keepOriginalLink: boolean;
    attachments: string;
    approvedStatus: number;
    templateId: string;
    type: string;
    object: string;
    enableLinkPreview: boolean;
};
export interface ICreateMessageRepository {
    create(data: CreateMessage): Promise<number>;
}
