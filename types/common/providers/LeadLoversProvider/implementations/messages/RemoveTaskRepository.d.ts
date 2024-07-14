import { IRemoveTaskRepository } from '../../models/messages/IRemoveTaskRepository';
export declare class RemoveTaskRepository implements IRemoveTaskRepository {
    remove(modeCodi: number): Promise<void>;
}
