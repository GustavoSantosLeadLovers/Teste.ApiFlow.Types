import { IGetInfoWhatsAppSlotRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/IGetInfoWhatsAppSlotRepository';
export declare class GetInstancesStatusService {
    private getInfoWhatsAppSlotRepository;
    constructor(getInfoWhatsAppSlotRepository: IGetInfoWhatsAppSlotRepository);
    execute(instanceApiKey: string, instanceUuid: string): Promise<string>;
}
