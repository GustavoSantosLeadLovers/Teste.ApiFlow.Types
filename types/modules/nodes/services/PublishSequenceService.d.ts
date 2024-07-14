import { CreateFunnelRepository } from '../../../common/providers/LeadLoversProvider/implementations/funnels/CreateFunnelRepoistory';
import { EditFunnelRepository } from '../../../common/providers/LeadLoversProvider/implementations/funnels/EditFunnelRepository';
import { IListFunnelsByIdsRepository } from '../../../common/providers/LeadLoversProvider/models/funnels/IListFunnelsByIdsRepository';
import { IExchangeProducer } from '../../../common/providers/QueueProvider/models/IExchangeProducer';
import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export declare class PublishSequenceService {
    private publishSequenceQueueConsumer;
    private publishSequenceExchangeProducer;
    private listFunnelsByIdsRepository;
    private editFunnelRepository;
    private createFunnelRepository;
    private monitorSequencePublicationExchangeProducer;
    private removeMessageExchangeProducer;
    private publishMessageExchangeProducer;
    private publishTriggerExchangeProducer;
    private removeTriggerExchangeProducer;
    constructor(publishSequenceQueueConsumer: IQueueConsumer, publishSequenceExchangeProducer: IExchangeProducer, listFunnelsByIdsRepository: IListFunnelsByIdsRepository, editFunnelRepository: EditFunnelRepository, createFunnelRepository: CreateFunnelRepository, monitorSequencePublicationExchangeProducer: IExchangeProducer, removeMessageExchangeProducer: IExchangeProducer, publishMessageExchangeProducer: IExchangeProducer, publishTriggerExchangeProducer: IExchangeProducer, removeTriggerExchangeProducer: IExchangeProducer);
    execute(): void;
    private upsertFunnel;
    private listMessages;
    private sendMessagesToPublishQueue;
    private sendWhatsAppModeloToRemoveQueue;
    private listSequenceEndTriggers;
    private sendSequenceEndTriggersToPublishQueue;
    private sendSequenceEndTriggersToRemoveQueue;
}
