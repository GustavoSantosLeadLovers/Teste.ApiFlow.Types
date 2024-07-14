import { WhatsAppSlot, IEditWhatsAppSlotsByIdRepository } from '../../models/accounts/IEditWhatsAppSlotsByIdRepository';
export declare class EditWhatsAppSlotsByIdRepository implements IEditWhatsAppSlotsByIdRepository {
    edit(data: WhatsAppSlot): Promise<void>;
}
