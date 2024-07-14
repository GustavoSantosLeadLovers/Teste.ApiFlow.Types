import { IListSlotByWhatsAppSlotIdRepository, WhatsAppSlot } from '../../models/accounts/IListSlotByWhatsAppSlotIdRepository';
export declare class ListSlotByWhatsAppSlotIdRepository implements IListSlotByWhatsAppSlotIdRepository {
    list(slotId: number): Promise<WhatsAppSlot>;
}
