import { Account, IListWhatsAppAccountAndWhatsAppSlotByAccountIdRepository } from '../../models/accounts/IListWhatsAppAccountAndWhatsAppSlotByAccountIdRepository';
export declare class ListWhatsAppAccountAndWhatsAppSlotByAccountIdRepository implements IListWhatsAppAccountAndWhatsAppSlotByAccountIdRepository {
    list(accountId: number): Promise<Account>;
}
