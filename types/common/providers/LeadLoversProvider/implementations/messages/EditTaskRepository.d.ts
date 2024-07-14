import { EditTask, IEditTaskRepository } from '../../models/messages/IEditTaskRepository';
export declare class EditTaskRepository implements IEditTaskRepository {
    create(task: EditTask): Promise<void>;
}
