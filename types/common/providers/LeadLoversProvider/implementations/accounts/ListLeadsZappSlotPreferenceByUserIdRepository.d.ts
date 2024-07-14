import { IListLeadsZappSlotPreferenceByUserIdRepository, WhatsAppSlot } from '../../models/accounts/IListLeadsZappSlotPreferenceByUserIdRepository';
export declare class ListLeadsZappSlotPreferenceByUserIdRepository implements IListLeadsZappSlotPreferenceByUserIdRepository {
    list(userId: number): Promise<WhatsAppSlot>;
}
