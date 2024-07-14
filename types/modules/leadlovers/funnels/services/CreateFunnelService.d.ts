import { IQueueConsumer } from '../../../../common/providers/QueueProvider/models/IQueueConsumer';
import { CreateFunnelRepository } from '../../../../common/providers/LeadLoversProvider/implementations/funnels/CreateFunnelRepoistory';
import { AlreadyExistsFunnelRepository } from '../../../../common/providers/LeadLoversProvider/implementations/funnels/AlreadyExistsFunnelRepository';
import { IExchangeProducer } from '../../../../common/providers/QueueProvider/models/IExchangeProducer';
export declare class CreateFunnelService {
    private createFunnelQueueConsumer;
    private alreadyExistsFunnelRepository;
    private createFunnelRepository;
    private updateNodeLeadloversIdExchangeProducer;
    constructor(createFunnelQueueConsumer: IQueueConsumer, alreadyExistsFunnelRepository: AlreadyExistsFunnelRepository, createFunnelRepository: CreateFunnelRepository, updateNodeLeadloversIdExchangeProducer: IExchangeProducer);
    execute(): void;
}
