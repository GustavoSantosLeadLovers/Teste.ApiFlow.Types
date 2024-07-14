export type WhatsAppSlot = {
    id: number;
    token: string;
    leadsZappUuid: string;
    leadsZappToken: string;
};
export interface IListLeadsZappSlotPreferenceByUserIdRepository {
    list(userId: number): Promise<WhatsAppSlot>;
}
