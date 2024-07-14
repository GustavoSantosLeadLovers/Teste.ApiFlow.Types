import { IExchangeProducer } from '../../../common/providers/QueueProvider/models/IExchangeProducer';
import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export declare class PublishFunnelService {
    private publishFunnelQueueConsumer;
    private publishModelExchangeProducer;
    private sequence?;
    constructor(publishFunnelQueueConsumer: IQueueConsumer, publishModelExchangeProducer: IExchangeProducer);
    execute(): void;
    private createSequence;
    private saveSequence;
    private markInitialSequence;
    private saveFlowDuplicationError;
    private removeSequenceWithError;
}
