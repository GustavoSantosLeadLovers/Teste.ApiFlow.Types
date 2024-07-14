import { IAssignTagLeadRepository } from '../../../common/providers/LeadLoversProvider/models/messages/IAssignTagLeadRepository';
import { IListLeadsByMessagesErrorRepository } from '../../../common/providers/LeadLoversProvider/models/messages/IListLeadsByMessagesErrorRepository';
import { IListLeadUsuaSistByLeadCodiRepository } from '../../../common/providers/LeadLoversProvider/models/messages/IListLeadUsuaSistByLeadCodiRepository';
export declare class CreateTagsByMessageErrorService {
    private listLeadsByMessagesErrorRepository;
    private assignTagLeadRepository;
    private listLeadUsuaSistByLeadCodiRepository;
    constructor(listLeadsByMessagesErrorRepository: IListLeadsByMessagesErrorRepository, assignTagLeadRepository: IAssignTagLeadRepository, listLeadUsuaSistByLeadCodiRepository: IListLeadUsuaSistByLeadCodiRepository);
    execute(modelId: number, tagIds: number[], user_id: number): Promise<void>;
}
