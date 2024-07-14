export type WhatsAppAccount = {
    id: number;
    machineId: number;
    name: string;
    phoneNumber: string;
    authenticatedQrCode: boolean;
    authenticatedCloudApi: boolean;
    isCurrentAccount: number;
    isCloudApi: boolean;
};
export interface IListWhatsAppAccountsByUsuaSistCodiRepository {
    list(listCodi: number, machineId: number): Promise<WhatsAppAccount[]>;
}
