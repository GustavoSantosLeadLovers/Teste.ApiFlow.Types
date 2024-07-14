import { IRemoveAllConditionalTriggerActionsByTriggerIdRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IRemoveAllConditionalTriggerActionsByTriggerIdRepository';
import { IRemoveAllConditionalTriggerFiltersByTriggerIdRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IRemoveAllConditionalTriggerFiltersByTriggerIdRepository';
import { IRemoveAllTriggerActionsRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IRemoveAllTriggerActionsRepository';
import { IRemoveAllTriggerAnswerRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IRemoveAllTriggerAnswerRepository';
import { IRemoveConditionalTriggerByIdRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IRemoveConditionalTriggerByIdRepository';
import { IRemoveTriggerRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IRemoveTriggerRepository';
import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export declare class RemoveWhatsAppTriggerService {
    private removeTriggerQueueConsumer;
    private removeAllTriggerActionsRepository;
    private removeAllTriggerAnswerRepository;
    private removeTriggerRepository;
    private removeAllConditionalTriggerActionsByTriggerIdRepository;
    private removeAllConditionalTriggerFiltersByTriggerIdRepository;
    private RemoveConditionalTriggerByIdRepository;
    constructor(removeTriggerQueueConsumer: IQueueConsumer, removeAllTriggerActionsRepository: IRemoveAllTriggerActionsRepository, removeAllTriggerAnswerRepository: IRemoveAllTriggerAnswerRepository, removeTriggerRepository: IRemoveTriggerRepository, removeAllConditionalTriggerActionsByTriggerIdRepository: IRemoveAllConditionalTriggerActionsByTriggerIdRepository, removeAllConditionalTriggerFiltersByTriggerIdRepository: IRemoveAllConditionalTriggerFiltersByTriggerIdRepository, RemoveConditionalTriggerByIdRepository: IRemoveConditionalTriggerByIdRepository);
    execute(): void;
}
