import { EditContact, IEditContactRepository } from '../../models/messages/IEditContactRepository';
export declare class EditContactRepository implements IEditContactRepository {
    edit(contact: EditContact): Promise<void>;
}
