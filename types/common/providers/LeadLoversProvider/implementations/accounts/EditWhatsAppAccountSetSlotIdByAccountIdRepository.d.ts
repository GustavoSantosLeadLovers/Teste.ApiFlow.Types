import { IEditWhatsAppAccountSetSlotIdByAccountIdRepository } from '../../models/accounts/IEditWhatsAppAccountSetSlotIdByAccountIdRepository';
export declare class EditWhatsAppAccountSetSlotIdByAccountIdRepository implements IEditWhatsAppAccountSetSlotIdByAccountIdRepository {
    edit(id: number, slotId: number): Promise<void>;
}
