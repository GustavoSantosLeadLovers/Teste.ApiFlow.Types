export type Slot = {
    id: number;
    url: string;
    slot: number;
    token: string;
    isAvizap: boolean;
    accountId: number;
    phoneNumber: string;
    isLeadsZapp: boolean;
    leadsZappUuid: string;
};
export interface IListWhatsAppSlotByListCodiRepository {
    list(listCodi: number): Promise<Slot>;
}
