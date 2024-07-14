import { IListTriggerAnswerByTriggerIdRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IListTriggerAnswerByTriggerIdRepository';
import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export declare class PublishWhatsAppTriggerService {
    private publishWhatsAppTriggerQueueConsumer;
    private listTriggerAnswerByTriggerIdRepository;
    constructor(publishWhatsAppTriggerQueueConsumer: IQueueConsumer, listTriggerAnswerByTriggerIdRepository: IListTriggerAnswerByTriggerIdRepository);
    execute(): void;
    private getTriggerEvent;
    private getEdgeType;
    private getAnswer;
    private createTriggers;
    private createConditionalTriggers;
    private createLabels;
    private createLink;
    private createReplyLink;
    private createLinks;
    private saveTriggers;
    private saveLabels;
    private saveEdges;
    private saveFlowDuplicationError;
    private updateMessageStatus;
}
