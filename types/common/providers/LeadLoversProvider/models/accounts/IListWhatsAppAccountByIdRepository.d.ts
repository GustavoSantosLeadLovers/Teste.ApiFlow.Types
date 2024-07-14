export type Account = {
    id: number;
    isWhatsAppCloudApi: boolean;
    name: string;
    userId: number;
};
export interface IListWhatsAppAccountByIdRepository {
    list(accountId: number): Promise<Account>;
}
