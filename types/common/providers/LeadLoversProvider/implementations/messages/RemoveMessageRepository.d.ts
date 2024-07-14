import { IRemoveMessageRepository } from '../../models/messages/IRemoveMessageRepository';
export declare class RemoveMessageRepository implements IRemoveMessageRepository {
    remove(modeCodi: number): Promise<void>;
}
