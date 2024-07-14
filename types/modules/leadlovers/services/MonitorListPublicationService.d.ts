import { IExchangeProducer } from '../../../common/providers/QueueProvider/models/IExchangeProducer';
import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export declare class MonitorListPublicationService {
    private monitorListPublicationQueueConsumer;
    private monitorListPublicationExchangeProducer;
    constructor(monitorListPublicationQueueConsumer: IQueueConsumer, monitorListPublicationExchangeProducer: IExchangeProducer);
    execute(): void;
    private recheckListPublication;
}
