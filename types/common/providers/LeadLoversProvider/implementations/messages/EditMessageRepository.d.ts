import { EditMessage, IEditMessageRepository } from '../../models/messages/IEditMessageRepository';
export declare class EditMessageRepository implements IEditMessageRepository {
    edit(message: EditMessage): Promise<void>;
}
