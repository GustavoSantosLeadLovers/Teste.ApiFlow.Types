import { ICreateWhatsAppSlotSetConfigRepository, LeadsZappResponseModel } from '../../models/accounts/ICreateWhatsAppSlotSetConfigRepository';
export declare class CreateWhatsAppSlotSetConfigRepository implements ICreateWhatsAppSlotSetConfigRepository {
    edit(apiKey: string, instanceUuid: string): Promise<LeadsZappResponseModel>;
}
