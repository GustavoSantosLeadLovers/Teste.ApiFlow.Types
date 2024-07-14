import { IListTriggersByIdsRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IListTriggersByIdsRepository';
import { IExchangeProducer } from '../../../common/providers/QueueProvider/models/IExchangeProducer';
import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export declare class MonitorMessagePublicationService {
    private monitorMessagePublicationQueueConsumer;
    private listTriggersByIdsRepository;
    private monitorMessagePublicationExchangeProducer;
    constructor(monitorMessagePublicationQueueConsumer: IQueueConsumer, listTriggersByIdsRepository: IListTriggersByIdsRepository, monitorMessagePublicationExchangeProducer: IExchangeProducer);
    execute(): void;
    private finalizePublication;
    private recheckFlowPublication;
}
