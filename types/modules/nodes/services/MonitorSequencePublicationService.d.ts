import { IListActiveMessagesByIdsRepository } from '../../../common/providers/LeadLoversProvider/models/messages/IListActiveMessagesByIdsRepository';
import { IListActiveTasksByModeCodisRepository } from '../../../common/providers/LeadLoversProvider/models/messages/IListActiveTasksByModeCodisRepository';
import { IListTriggersByIdsRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IListTriggersByIdsRepository';
import { IExchangeProducer } from '../../../common/providers/QueueProvider/models/IExchangeProducer';
import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export declare class MonitorSequencePublicationService {
    private monitorSequencePublicationQueueConsumer;
    private listActiveMessagesByIdsRepository;
    private listActiveTasksByModeCodisRepository;
    private listTriggersByIdsRepository;
    private monitorSequencePublicationExchangeProducer;
    constructor(monitorSequencePublicationQueueConsumer: IQueueConsumer, listActiveMessagesByIdsRepository: IListActiveMessagesByIdsRepository, listActiveTasksByModeCodisRepository: IListActiveTasksByModeCodisRepository, listTriggersByIdsRepository: IListTriggersByIdsRepository, monitorSequencePublicationExchangeProducer: IExchangeProducer);
    execute(): void;
    private finalizePublication;
    private recheckFlowPublication;
}
