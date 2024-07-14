import { PublishListEvent } from '../../../common/helpers/QueueEvents';
import { IExchangeProducer } from '../../../common/providers/QueueProvider/models/IExchangeProducer';
export declare class SendToPublishListQueueService {
    private publishListExchangeProducer;
    constructor(publishListExchangeProducer: IExchangeProducer);
    execute(props: PublishListEvent): void;
}
