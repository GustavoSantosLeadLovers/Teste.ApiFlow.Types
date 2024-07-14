export type Account = {
    id: number;
    isWhatsAppCloudApi: boolean;
    name: string;
    userId: number;
    isLeadsZapp: boolean;
    slotId: number;
    leadsZappUuid: string;
    slotToken: string;
    qrCode: string;
    leadsZappToken: string;
};
export interface IListWhatsAppAccountAndWhatsAppSlotByAccountIdRepository {
    list(accountId: number): Promise<Account>;
}
