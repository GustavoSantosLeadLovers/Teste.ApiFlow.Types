import { IEditWhatsAppAccountSetListCodiByIdRepository } from '../../models/accounts/IEditWhatsAppAccountSetListCodiByIdRepository';
export declare class EditWhatsAppAccountSetListCodiByIdRepository implements IEditWhatsAppAccountSetListCodiByIdRepository {
    edit(listCodi: number, accountId: number): Promise<void>;
}
