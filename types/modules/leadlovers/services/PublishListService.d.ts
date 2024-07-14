import { IListFunnelsByListCodiRepository } from '../../../common/providers/LeadLoversProvider/models/funnels/IListFunnelsByListCodiRepository';
import { IExchangeProducer } from '../../../common/providers/QueueProvider/models/IExchangeProducer';
import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export declare class PublishListService {
    private publishListQueueConsumer;
    private listFunnelsByListCodiRepository;
    private publishFunnelExchangeProducer;
    private monitorListPublicationExchangeProducer;
    constructor(publishListQueueConsumer: IQueueConsumer, listFunnelsByListCodiRepository: IListFunnelsByListCodiRepository, publishFunnelExchangeProducer: IExchangeProducer, monitorListPublicationExchangeProducer: IExchangeProducer);
    execute(): void;
    private listFunnels;
    private sendFunnelsToPublishQueue;
}
