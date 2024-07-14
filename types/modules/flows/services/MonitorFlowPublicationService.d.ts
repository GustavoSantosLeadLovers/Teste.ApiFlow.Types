import { IListFunnelsByIdsRepository } from '../../../common/providers/LeadLoversProvider/models/funnels/IListFunnelsByIdsRepository';
import { IExchangeProducer } from '../../../common/providers/QueueProvider/models/IExchangeProducer';
import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export declare class MonitorFlowPublicationService {
    private monitorFlowPublicationQueueConsumer;
    private listFunnelsByIdsRepository;
    private monitorFlowPublicationExchangeProducer;
    constructor(monitorFlowPublicationQueueConsumer: IQueueConsumer, listFunnelsByIdsRepository: IListFunnelsByIdsRepository, monitorFlowPublicationExchangeProducer: IExchangeProducer);
    execute(): void;
    private finalizePublication;
    private recheckFlowPublication;
}
