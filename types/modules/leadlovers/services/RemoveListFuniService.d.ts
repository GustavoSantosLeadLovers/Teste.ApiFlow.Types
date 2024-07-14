import { IListFunnelRepository } from '../../../common/providers/LeadLoversProvider/models/funnels/IListFunnelRepository';
import { IRemoveFunnelRepository } from '../../../common/providers/LeadLoversProvider/models/funnels/IRemoveFunnelRepository';
import { IRemoveListFuniCateListRepository } from '../../../common/providers/LeadLoversProvider/models/funnels/IRemoveListFuniCateListRepository';
import { IRemoveLeadActionsInSequenceRepository } from '../../../common/providers/LeadLoversProvider/models/leads/IRemoveLeadActionsInSequenceRepository';
import { IRemoveLeadsFromSequenceRepository } from '../../../common/providers/LeadLoversProvider/models/leads/IRemoveLeadsFromSequenceRepository';
import { IRemoveWhatsAppLinksListRepository } from '../../../common/providers/LeadLoversProvider/models/links/IRemoveWhatsAppLinksListRepository';
import { IRemoveWhatsAppLinksListTagRepository } from '../../../common/providers/LeadLoversProvider/models/links/IRemoveWhatsAppLinksListTagRepository';
import { IRemoveMessagesByFuniCodiRepository } from '../../../common/providers/LeadLoversProvider/models/messages/IRemoveMessagesByFuniCodiRepository';
import { IRemoveTasksRepository } from '../../../common/providers/LeadLoversProvider/models/messages/IRemoveTasksRepository';
import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export declare class RemoveListFunilService {
    private removeSequenceQueueConsumer;
    private listFunnelRepository;
    private removeTasksRepository;
    private removeMessagesByFuniCodiRepository;
    private removeLeadsFromSequenceRepository;
    private removeLeadActionsInSequenceRepository;
    private removeWhatsAppLinksListTagRepository;
    private removeWhatsAppLinksListRepository;
    private removeListFuniCateListRepository;
    private removeFunnelRepository;
    constructor(removeSequenceQueueConsumer: IQueueConsumer, listFunnelRepository: IListFunnelRepository, removeTasksRepository: IRemoveTasksRepository, removeMessagesByFuniCodiRepository: IRemoveMessagesByFuniCodiRepository, removeLeadsFromSequenceRepository: IRemoveLeadsFromSequenceRepository, removeLeadActionsInSequenceRepository: IRemoveLeadActionsInSequenceRepository, removeWhatsAppLinksListTagRepository: IRemoveWhatsAppLinksListTagRepository, removeWhatsAppLinksListRepository: IRemoveWhatsAppLinksListRepository, removeListFuniCateListRepository: IRemoveListFuniCateListRepository, removeFunnelRepository: IRemoveFunnelRepository);
    execute(): void;
}
