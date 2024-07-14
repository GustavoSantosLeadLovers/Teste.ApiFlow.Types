import { IGetInfoWhatsAppSlotRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/IGetInfoWhatsAppSlotRepository';
type LeadsZappConfigureInstanceResponseModel = {
    configured: boolean;
    error: LeadsZappErrorResponseModel | null;
};
type LeadsZappErrorResponseModel = {
    statusCode: number;
    statusDescription: string;
};
export declare class ConfigurePreferenceInstanceService {
    private getInfoWhatsAppSlotRepository;
    constructor(getInfoWhatsAppSlotRepository: IGetInfoWhatsAppSlotRepository);
    execute(slotId: number, instanceApiKey: string, instanceUuid: string): Promise<LeadsZappConfigureInstanceResponseModel>;
}
export {};
