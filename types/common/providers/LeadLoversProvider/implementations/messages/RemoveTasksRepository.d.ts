import { IRemoveTasksRepository } from '../../models/messages/IRemoveTasksRepository';
export declare class RemoveTasksRepository implements IRemoveTasksRepository {
    remove(funiCodi: number): Promise<void>;
}
