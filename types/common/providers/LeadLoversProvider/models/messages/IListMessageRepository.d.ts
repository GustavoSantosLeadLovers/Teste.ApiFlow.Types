export type Message = {
    id: number;
    machineId: number;
    sequenceId: number;
    type: string;
    object: string;
    html: string;
    attachments: string;
    sequenceNumber: number;
};
export interface IListMessageRepository {
    list(modeCodi: number): Promise<Message>;
}
