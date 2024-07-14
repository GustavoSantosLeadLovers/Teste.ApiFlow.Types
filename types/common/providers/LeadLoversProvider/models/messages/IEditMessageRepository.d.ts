export type EditMessage = {
    id: number;
    name?: string;
    html?: string;
    machineId?: number;
    funnelId?: number;
    sequenceNumber?: number;
    timeToNextMessage?: string;
    active?: boolean;
    keepOriginalLink?: boolean;
    attachments?: string;
    approvedStatus?: number;
    templateId?: string;
    type?: string;
    object?: string;
    enableLinkPreview?: boolean;
};
export interface IEditMessageRepository {
    edit(message: EditMessage): Promise<void>;
}
