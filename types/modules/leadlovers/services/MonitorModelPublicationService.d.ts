import { IExchangeProducer } from '../../../common/providers/QueueProvider/models/IExchangeProducer';
import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export declare class MonitorModelPublicationService {
    private monitorModelPublicationQueueConsumer;
    private monitorModelPublicationExchangeProducer;
    constructor(monitorModelPublicationQueueConsumer: IQueueConsumer, monitorModelPublicationExchangeProducer: IExchangeProducer);
    execute(): void;
    private recheckModelPublication;
}
