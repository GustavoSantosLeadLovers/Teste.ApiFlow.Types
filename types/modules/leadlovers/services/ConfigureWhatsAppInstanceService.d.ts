import { ICreateLeadsZappWebhookRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/ICreateLeadsZappWebhookRepository';
import { ICreateWhatsAppSlotSetConfigRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/ICreateWhatsAppSlotSetConfigRepository';
import { IEditWhatsAppSlotWebhookByIdRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/IEditWhatsAppSlotWebhookByIdRepository';
type LeadsZappConfigureInstanceModel = {
    slotId: number;
    instance: number;
    webhookName: string;
    instanceUuid: string;
    instanceApiKey: string;
};
type LeadsZappConfigureInstanceResponseModel = {
    configured: boolean;
    error: LeadsZappErrorResponseModel | null;
};
type LeadsZappErrorResponseModel = {
    statusCode: number;
    statusDescription: string;
};
export declare class ConfigureWhatsAppInstanceService {
    private createLeadsZappWebhookRepository;
    private editWhatsAppSlotWebhookByIdRepository;
    private createWhatsAppSlotSetConfigRepository;
    constructor(createLeadsZappWebhookRepository: ICreateLeadsZappWebhookRepository, editWhatsAppSlotWebhookByIdRepository: IEditWhatsAppSlotWebhookByIdRepository, createWhatsAppSlotSetConfigRepository: ICreateWhatsAppSlotSetConfigRepository);
    execute(data: LeadsZappConfigureInstanceModel): Promise<LeadsZappConfigureInstanceResponseModel>;
}
export {};
