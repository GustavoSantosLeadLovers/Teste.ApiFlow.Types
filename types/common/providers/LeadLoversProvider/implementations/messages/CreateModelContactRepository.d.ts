import { CreateModelContact, ICreateModelContactRepository } from '../../models/messages/ICreateModelContactRepository';
export declare class CreateModelContactRepository implements ICreateModelContactRepository {
    create(contact: CreateModelContact): Promise<void>;
}
