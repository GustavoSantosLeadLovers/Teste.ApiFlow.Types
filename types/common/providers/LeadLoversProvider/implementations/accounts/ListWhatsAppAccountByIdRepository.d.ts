import { Account, IListWhatsAppAccountByIdRepository } from '../../models/accounts/IListWhatsAppAccountByIdRepository';
export declare class ListWhatsAppAccountByIdRepository implements IListWhatsAppAccountByIdRepository {
    list(accountId: number): Promise<Account>;
}
