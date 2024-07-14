export interface IEditWhatsAppSlotUsuaSistPreferenceByIdRepository {
    edit(id: number, userId: number): Promise<void>;
}
