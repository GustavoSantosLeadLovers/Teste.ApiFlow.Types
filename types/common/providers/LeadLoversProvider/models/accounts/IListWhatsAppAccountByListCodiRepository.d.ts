export type Account = {
    id: number;
    isWhatsAppCloudApi: boolean;
    userId: number;
};
export interface IListWhatsAppAccountByListCodiRepository {
    list(listCodi: number): Promise<Account>;
}
