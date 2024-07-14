import { Contact } from '../../../common/providers/LeadLoversProvider/models/messages/IListContactsByModeCodiRepository';
import { IListContactsByUsuasistcodiRepository } from '../../../common/providers/LeadLoversProvider/models/messages/IListContactsByUsuasistcodiRepository';
export declare class ListContactsService {
    private listContactsByUsuasistcodiRepository;
    constructor(listContactsByUsuasistcodiRepository: IListContactsByUsuasistcodiRepository);
    execute(userId: number): Promise<Contact[]>;
}
