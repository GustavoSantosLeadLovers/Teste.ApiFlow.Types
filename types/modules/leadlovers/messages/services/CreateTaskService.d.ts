import { IQueueConsumer } from '../../../../common/providers/QueueProvider/models/IQueueConsumer';
import { CreateTaskRepository } from '../../../../common/providers/LeadLoversProvider/implementations/messages/CreateTaskRepository';
export declare class CreateTaskService {
    private createTaskQueueConsumer;
    private createTaskRepository;
    constructor(createTaskQueueConsumer: IQueueConsumer, createTaskRepository: CreateTaskRepository);
    execute(): void;
    private makeTask;
}
