import { Contact, IListContactsByPhoneNumbersRepository } from '../../models/messages/IListContactsByPhoneNumberRepository';
export declare class ListContactsByPhoneNumbersRepository implements IListContactsByPhoneNumbersRepository {
    list(phoneNumbers: string[]): Promise<Contact[]>;
}
