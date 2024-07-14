export interface IEditWhatsAppAccountSetSlotIdByAccountIdRepository {
    edit(id: number, slotId: number): Promise<void>;
}
