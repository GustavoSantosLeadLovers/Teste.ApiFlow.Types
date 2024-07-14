import { IListCountWhatsAppAccountsUsingCreditsRepository } from '../../models/accounts/IListCountWhatsAppAccountsUsingCreditsRepository';
export declare class ListCountWhatsAppAccountsUsingCreditsRepository implements IListCountWhatsAppAccountsUsingCreditsRepository {
    list(userId: number): Promise<number>;
}
