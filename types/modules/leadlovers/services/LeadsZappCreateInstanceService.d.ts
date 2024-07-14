import { ICreateLeadsZappInstanceRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/ICreateLeadsZappInstanceRepository';
import { ICreateLeadsZappSlotRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/ICreateLeadsZappSlotRepository';
import { IEditWhatsAppSlotsByIdRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/IEditWhatsAppSlotsByIdRepository';
import { IListLastInstanceWhatsAppSlotRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/IListLastInstanceWhatsAppSlotRepository';
type LeadsZappCreateInstanceModel = {
    slotId: number;
    instance: number;
    whatsAppAccountName: string;
    instanceUuid: string;
    instanceApiKey: string;
    error?: LeadsZappErrorResponseModel;
};
type LeadsZappErrorResponseModel = {
    statusCode: number;
    statusDescription: string;
};
export declare class LeadsZappCreateInstanceService {
    private listLastInstanceWhatsAppSlotRepository;
    private createLeadsZappSlotRepository;
    private createLeadsZappInstanceRepository;
    private editWhatsAppSlotsByIdRepository;
    constructor(listLastInstanceWhatsAppSlotRepository: IListLastInstanceWhatsAppSlotRepository, createLeadsZappSlotRepository: ICreateLeadsZappSlotRepository, createLeadsZappInstanceRepository: ICreateLeadsZappInstanceRepository, editWhatsAppSlotsByIdRepository: IEditWhatsAppSlotsByIdRepository);
    execute(whatsAppAccountName: string): Promise<LeadsZappCreateInstanceModel>;
}
export {};
