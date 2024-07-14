import { Contact, IListContactsByModeCodiRepository } from '../../models/messages/IListContactsByModeCodiRepository';
export declare class ListContactsByModeCodiRepository implements IListContactsByModeCodiRepository {
    list(modeCodi: number): Promise<Contact[]>;
}
