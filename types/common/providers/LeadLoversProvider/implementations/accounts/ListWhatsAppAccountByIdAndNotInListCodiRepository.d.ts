import { Account, IListWhatsAppAccountByIdAndNotInListCodiRepository } from '../../models/accounts/IListWhatsAppAccountByIdAndNotInListCodiRepository';
export declare class ListWhatsAppAccountByIdAndNotInListCodiRepository implements IListWhatsAppAccountByIdAndNotInListCodiRepository {
    list(accountId: number, machineId: number): Promise<Account>;
}
