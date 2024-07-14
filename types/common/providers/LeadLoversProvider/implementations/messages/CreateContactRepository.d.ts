import { CreateContact, ICreateContactRepository } from '../../models/messages/ICreateContactRepository';
export declare class CreateContactRepository implements ICreateContactRepository {
    create(contact: CreateContact): Promise<number>;
}
