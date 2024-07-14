import { IQueueConsumer } from '../../../../common/providers/QueueProvider/models/IQueueConsumer';
import { IListTriggerEventIdByNameRepository } from '../../../../common/providers/LeadLoversProvider/models/triggers/IListTriggerEventIdByNameRepository';
import { CreateTriggerRepository } from '../../../../common/providers/LeadLoversProvider/implementations/triggers/CreateTriggerRepository';
import { IExchangeProducer } from '../../../../common/providers/QueueProvider/models/IExchangeProducer';
export declare class CreateTriggerService {
    private createTriggerQueueConsumer;
    private listTriggerEventIdByNameRepository;
    private createTriggerRepository;
    private updateNodeLeadloversIdExchangeProducer;
    private createTriggerActionExchangeProducer;
    constructor(createTriggerQueueConsumer: IQueueConsumer, listTriggerEventIdByNameRepository: IListTriggerEventIdByNameRepository, createTriggerRepository: CreateTriggerRepository, updateNodeLeadloversIdExchangeProducer: IExchangeProducer, createTriggerActionExchangeProducer: IExchangeProducer);
    execute(): void;
    private requestTriggerActionCreation;
}
