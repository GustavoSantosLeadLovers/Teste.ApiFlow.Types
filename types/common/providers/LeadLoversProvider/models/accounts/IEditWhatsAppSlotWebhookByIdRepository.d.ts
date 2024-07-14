export interface IEditWhatsAppSlotWebhookByIdRepository {
    edit(id: number, webhook: string): Promise<void>;
}
