import { PublishFlowEvent } from '../../../common/helpers/QueueEvents';
import { IExchangeProducer } from '../../../common/providers/QueueProvider/models/IExchangeProducer';
export declare class SendToPublishQueueService {
    private publishFlowExchangeProducer;
    constructor(publishFlowExchangeProducer: IExchangeProducer);
    execute(props: PublishFlowEvent): void;
}
