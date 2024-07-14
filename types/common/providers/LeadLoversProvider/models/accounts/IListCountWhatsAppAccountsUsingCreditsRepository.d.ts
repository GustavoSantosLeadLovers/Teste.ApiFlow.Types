export interface IListCountWhatsAppAccountsUsingCreditsRepository {
    list(userId: number): Promise<number>;
}
