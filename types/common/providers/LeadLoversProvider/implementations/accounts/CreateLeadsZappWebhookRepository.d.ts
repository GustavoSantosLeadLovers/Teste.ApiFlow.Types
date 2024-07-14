import { ICreateLeadsZappWebhookRepository, LeadsZappAddWebhookRequestModel, LeadsZappAddWebhookResponseModel } from '../../models/accounts/ICreateLeadsZappWebhookRepository';
export declare class CreateLeadsZappWebhookRepository implements ICreateLeadsZappWebhookRepository {
    edit(apiKey: string, data: LeadsZappAddWebhookRequestModel): Promise<LeadsZappAddWebhookResponseModel>;
}
