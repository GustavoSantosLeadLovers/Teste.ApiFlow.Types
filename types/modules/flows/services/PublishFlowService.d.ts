import { IExchangeProducer } from '../../../common/providers/QueueProvider/models/IExchangeProducer';
import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export declare class PublishFlowService {
    private publishFlowQueueConsumer;
    private publishFlowExchangeProducer;
    private publishSequenceExchangeProducer;
    private removeSequenceExchangeProducer;
    private monitorFlowPublicationExchangeProducer;
    constructor(publishFlowQueueConsumer: IQueueConsumer, publishFlowExchangeProducer: IExchangeProducer, publishSequenceExchangeProducer: IExchangeProducer, removeSequenceExchangeProducer: IExchangeProducer, monitorFlowPublicationExchangeProducer: IExchangeProducer);
    execute(): void;
    private updateStatusToPublishing;
    private listSequences;
    private sendSequencesToPublishQueue;
    private sendSequencesToRemoveQueue;
}
