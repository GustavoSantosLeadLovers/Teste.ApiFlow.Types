import { IListTaskRepository, Task } from '../../models/messages/IListTaskRepository';
export declare class ListTaskRepository implements IListTaskRepository {
    list(modeCodi: number): Promise<Task>;
}
