import { Account, IListWhatsAppAccountByListCodiRepository } from '../../models/accounts/IListWhatsAppAccountByListCodiRepository';
export declare class ListWhatsAppAccountByListCodiRepository implements IListWhatsAppAccountByListCodiRepository {
    list(listCodi: number): Promise<Account>;
}
