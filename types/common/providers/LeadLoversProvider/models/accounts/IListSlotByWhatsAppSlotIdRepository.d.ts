export type WhatsAppSlot = {
    id: number;
    slot: number;
    url: string;
    token: string;
    webhook: string;
    isAvizap: boolean;
    authenticationConfirmedByWebhook: boolean;
    leadsZappUuid: string;
    leadsZappToken: string;
    leadsZappTokenExpiresIn: Date;
};
export interface IListSlotByWhatsAppSlotIdRepository {
    list(slotId: number): Promise<WhatsAppSlot>;
}
