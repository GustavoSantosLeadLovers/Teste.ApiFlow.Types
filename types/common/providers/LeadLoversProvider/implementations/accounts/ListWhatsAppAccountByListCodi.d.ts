import { Account, IListWhatsAppAccountByListCodi } from '../../models/accounts/IListWhatsAppAccountByListCodi';
export declare class ListWhatsAppAccountByListCodi implements IListWhatsAppAccountByListCodi {
    list(listCodi: number): Promise<Account>;
}
