export type Account = {
    id: number;
    isWhatsAppCloudApi: boolean;
    userId: number;
    listName: string;
    machineId: number;
};
export interface IListWhatsAppAccountByIdAndNotInListCodiRepository {
    list(accountId: number, machineId: number): Promise<Account>;
}
