import { IExchangeProducer } from '../../../common/providers/QueueProvider/models/IExchangeProducer';
import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export declare class MonitorFunnelPublicationService {
    private monitorFunnelPublicationQueueConsumer;
    private monitorFunnelPublicationExchangeProducer;
    constructor(monitorFunnelPublicationQueueConsumer: IQueueConsumer, monitorFunnelPublicationExchangeProducer: IExchangeProducer);
    execute(): void;
    private recheckFunnelPublication;
}
