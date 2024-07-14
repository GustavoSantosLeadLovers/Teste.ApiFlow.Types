import { IListCloudApiMessageErrorsRepository, MessageError } from '../../../common/providers/LeadLoversProvider/models/messages/IListCloudApiMessageErrorsRepository';
export declare class ListWhatsAppMessageErrorsService {
    private listCloudApiMessageErrorsRepository;
    constructor(listCloudApiMessageErrorsRepository: IListCloudApiMessageErrorsRepository);
    execute(): Promise<MessageError[]>;
}
