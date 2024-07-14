export type WhatsAppSlot = {
    id: number;
    url: string;
    token: string;
    webhook?: string;
    leadsZappUuid: string;
};
export interface IEditWhatsAppSlotsByIdRepository {
    edit(data: WhatsAppSlot): Promise<void>;
}
