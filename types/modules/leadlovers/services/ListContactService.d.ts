import { IListContactRepository } from '../../../common/providers/LeadLoversProvider/models/messages/IListContactRepository';
import { Contact } from '../../../common/providers/LeadLoversProvider/models/messages/IListContactsByModeCodiRepository';
export declare class ListContactService {
    private listContactRepository;
    constructor(listContactRepository: IListContactRepository);
    execute(userId: number, id: number): Promise<Contact | undefined>;
}
