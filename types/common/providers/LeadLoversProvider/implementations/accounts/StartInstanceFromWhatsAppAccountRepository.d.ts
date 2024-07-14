import { IStartInstanceFromWhatsAppAccountRepository, LeadsZappResponseModel } from '../../models/accounts/IStartInstanceFromWhatsAppAccountRepository';
export declare class StartInstanceFromWhatsAppAccountRepository implements IStartInstanceFromWhatsAppAccountRepository {
    list(apiKey: string, instanceUuid: string): Promise<LeadsZappResponseModel>;
}
