export type Account = {
    id: number;
    isWhatsAppCloudApi: boolean;
};
export interface IListWhatsAppAccountByListCodi {
    list(listCodi: number): Promise<Account>;
}
