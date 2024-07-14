import { IQueueConsumer } from '../../../../common/providers/QueueProvider/models/IQueueConsumer';
import { CreateTriggerActionRepository } from '../../../../common/providers/LeadLoversProvider/implementations/triggers/CreateTriggerActionRepository';
import { ListSequenceNumberRepository } from '../../../../common/providers/LeadLoversProvider/implementations/messages/ListSequenceNumberRepository';
import { ListTriggerActionTypeByNameRepository } from '../../../../common/providers/LeadLoversProvider/implementations/triggers/ListTriggerActionTypeByNameRepository';
import { IExchangeProducer } from '../../../../common/providers/QueueProvider/models/IExchangeProducer';
export declare class CreateTriggerActionService {
    private createTriggerActionQueueConsumer;
    private listSequenceNumberRepository;
    private listTriggerActionTypeByNameRepository;
    private createTriggerActionRepository;
    private updateActionLeadloversIdExchangeProducer;
    constructor(createTriggerActionQueueConsumer: IQueueConsumer, listSequenceNumberRepository: ListSequenceNumberRepository, listTriggerActionTypeByNameRepository: ListTriggerActionTypeByNameRepository, createTriggerActionRepository: CreateTriggerActionRepository, updateActionLeadloversIdExchangeProducer: IExchangeProducer);
    execute(): void;
}
