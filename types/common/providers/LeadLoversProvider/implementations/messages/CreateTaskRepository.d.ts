import { CreateTask, ICreateTaskRepository } from '../../models/messages/ICreateTaskRepository';
export declare class CreateTaskRepository implements ICreateTaskRepository {
    create(task: CreateTask): Promise<void>;
}
