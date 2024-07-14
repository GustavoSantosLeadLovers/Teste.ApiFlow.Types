import { IQueueConsumer } from '../../../../common/providers/QueueProvider/models/IQueueConsumer';
import { IListTriggerEventIdByNameRepository } from '../../../../common/providers/LeadLoversProvider/models/triggers/IListTriggerEventIdByNameRepository';
import { IExchangeProducer } from '../../../../common/providers/QueueProvider/models/IExchangeProducer';
import { EditTriggerRepository } from '../../../../common/providers/LeadLoversProvider/implementations/triggers/EditTriggerRepository';
export declare class EditTriggerService {
    private editTriggerQueueConsumer;
    private listTriggerEventIdByNameRepository;
    private editTriggerRepository;
    private editTriggerActionExchangeProducer;
    constructor(editTriggerQueueConsumer: IQueueConsumer, listTriggerEventIdByNameRepository: IListTriggerEventIdByNameRepository, editTriggerRepository: EditTriggerRepository, editTriggerActionExchangeProducer: IExchangeProducer);
    execute(): void;
    private requestTriggerActionEdition;
}
