import { IListNextSequenceNumberRepository } from '../../../common/providers/LeadLoversProvider/models/funnels/IListNextSequenceNumberRepository';
import { IMoveLeadToPreviousPositionRepository } from '../../../common/providers/LeadLoversProvider/models/leads/IMoveLeadToPreviousPositionRepository';
import { IListMessageSequenceNumberRepository } from '../../../common/providers/LeadLoversProvider/models/messages/IListMessageSequenceNumberRepository';
import { IRemoveMessageRepository } from '../../../common/providers/LeadLoversProvider/models/messages/IRemoveMessageRepository';
import { IRemoveTaskRepository } from '../../../common/providers/LeadLoversProvider/models/messages/IRemoveTaskRepository';
import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export declare class RemoveWhatsAppModeloService {
    private removeMessageQueueConsumer;
    private removeMessageRepository;
    private removeTaskRepository;
    private listNextSequenceNumberRepository;
    private listMessageSequenceNumberRepository;
    private moveLeadToPreviousPositionRepository;
    constructor(removeMessageQueueConsumer: IQueueConsumer, removeMessageRepository: IRemoveMessageRepository, removeTaskRepository: IRemoveTaskRepository, listNextSequenceNumberRepository: IListNextSequenceNumberRepository, listMessageSequenceNumberRepository: IListMessageSequenceNumberRepository, moveLeadToPreviousPositionRepository: IMoveLeadToPreviousPositionRepository);
    execute(): void;
    private moveLeadToPreviousPosition;
}
