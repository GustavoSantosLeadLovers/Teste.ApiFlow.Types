import { IGetInfoWhatsAppSlotRepository, LeadsZappGetInstancesInfoRequestModel, LeadsZappGetInstancesInfoResponseModel } from '../../models/accounts/IGetInfoWhatsAppSlotRepository';
export declare class GetInfoWhatsAppSlotRepository implements IGetInfoWhatsAppSlotRepository {
    list(apiKey: string, data: LeadsZappGetInstancesInfoRequestModel): Promise<LeadsZappGetInstancesInfoResponseModel>;
}
