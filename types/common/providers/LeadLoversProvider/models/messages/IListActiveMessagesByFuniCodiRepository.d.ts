export type MessageByFuniCodi = {
    modeCodi: number;
    sequenceNumber: number;
    name: string;
    html: string;
    listCodi: number;
    funiCodi: number;
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
    sent: number;
    opened: number;
    delivered: number;
    clicked: number;
    errors: number;
    unsub: number;
};
export interface IListActiveMessagesByFuniCodiRepository {
    list(funiCodi: number): Promise<MessageByFuniCodi[]>;
}
