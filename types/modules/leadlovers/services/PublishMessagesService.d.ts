import { IListActiveMessagesByFuniCodiRepository } from '../../../common/providers/LeadLoversProvider/models/messages/IListActiveMessagesByFuniCodiRepository';
import { IListAudiosByModeCodiRepository } from '../../../common/providers/LeadLoversProvider/models/messages/IListAudiosByModeCodiRepository';
import { IListLinkPreviewByModeCodiRepository } from '../../../common/providers/LeadLoversProvider/models/messages/IListLinkPreviewByModeCodiRepository';
import { IListTaskRepository } from '../../../common/providers/LeadLoversProvider/models/messages/IListTaskRepository';
import { IListTriggersByModeCodisRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IListTriggersByModeCodisRepository';
import { IExchangeProducer } from '../../../common/providers/QueueProvider/models/IExchangeProducer';
import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export declare class PublishMessagesService {
    private publishModelQueueConsumer;
    private listActiveMessagesByFuniCodiRepository;
    private listTaskRepository;
    private listAudiosByModeCodiRepository;
    private listLinkPreviewByModeCodiRepository;
    private listTriggersByModeCodisRepository;
    private publishWhatsAppTriggerExchangeProducer;
    private monitorModelPublicationExchangeProducer;
    private monitorFunnelPublicationExchangeProducer;
    private readonly types;
    constructor(publishModelQueueConsumer: IQueueConsumer, listActiveMessagesByFuniCodiRepository: IListActiveMessagesByFuniCodiRepository, listTaskRepository: IListTaskRepository, listAudiosByModeCodiRepository: IListAudiosByModeCodiRepository, listLinkPreviewByModeCodiRepository: IListLinkPreviewByModeCodiRepository, listTriggersByModeCodisRepository: IListTriggersByModeCodisRepository, publishWhatsAppTriggerExchangeProducer: IExchangeProducer, monitorModelPublicationExchangeProducer: IExchangeProducer, monitorFunnelPublicationExchangeProducer: IExchangeProducer);
    execute(): void;
    private getFixedDate;
    private getAttachments;
    private getAudios;
    private getLinksPreview;
    private getOpenMessage;
    private getTemplateMessage;
    private createMessageData;
    private createMessage;
    private createEdge;
    private sendTriggersToPublishQueue;
}
