import { IQueueConsumer } from '../../../../common/providers/QueueProvider/models/IQueueConsumer';
import { EditMessageRepository } from '../../../../common/providers/LeadLoversProvider/implementations/messages/EditMessageRepository';
import { EditTaskRepository } from '../../../../common/providers/LeadLoversProvider/implementations/messages/EditTaskRepository';
import { ListSequenceNumberRepository } from '../../../../common/providers/LeadLoversProvider/implementations/messages/ListSequenceNumberRepository';
export declare class EditMessageService {
    private createMessageQueueConsumer;
    private listSequenceNumberRepository;
    private editMessageRepository;
    private editTaskRepository;
    constructor(createMessageQueueConsumer: IQueueConsumer, listSequenceNumberRepository: ListSequenceNumberRepository, editMessageRepository: EditMessageRepository, editTaskRepository: EditTaskRepository);
    execute(): void;
    private getSequenceNumber;
    private makeMessage;
    private makeTask;
}
