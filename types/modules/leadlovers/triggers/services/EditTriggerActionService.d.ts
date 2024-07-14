import { IQueueConsumer } from '../../../../common/providers/QueueProvider/models/IQueueConsumer';
import { EditTriggerActionRepository } from '../../../../common/providers/LeadLoversProvider/implementations/triggers/EditTriggerActionRepository';
import { ListSequenceNumberRepository } from '../../../../common/providers/LeadLoversProvider/implementations/messages/ListSequenceNumberRepository';
import { ListTriggerActionTypeByNameRepository } from '../../../../common/providers/LeadLoversProvider/implementations/triggers/ListTriggerActionTypeByNameRepository';
export declare class EditTriggerActionService {
    private editTriggerActionQueueConsumer;
    private listSequenceNumberRepository;
    private listTriggerActionTypeByNameRepository;
    private editTriggerActionRepository;
    constructor(editTriggerActionQueueConsumer: IQueueConsumer, listSequenceNumberRepository: ListSequenceNumberRepository, listTriggerActionTypeByNameRepository: ListTriggerActionTypeByNameRepository, editTriggerActionRepository: EditTriggerActionRepository);
    execute(): void;
}
