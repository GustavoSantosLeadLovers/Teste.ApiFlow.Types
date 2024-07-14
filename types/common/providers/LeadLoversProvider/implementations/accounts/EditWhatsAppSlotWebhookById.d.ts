import { IEditWhatsAppSlotWebhookByIdRepository } from '../../models/accounts/IEditWhatsAppSlotWebhookByIdRepository';
export declare class EditWhatsAppSlotWebhookByIdRepository implements IEditWhatsAppSlotWebhookByIdRepository {
    edit(id: number, webhook: string): Promise<void>;
}
