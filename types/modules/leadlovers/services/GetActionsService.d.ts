import { IListWhatsAppAttendantRepository } from '../../../common/providers/LeadLoversProvider/models/attendants/IListWhatsAppAttendantRepository';
import { IListWhatsAppTeamAttendantRepository } from '../../../common/providers/LeadLoversProvider/models/attendants/IListWhatsAppTeamAttendantRepository';
import { IListGroupRepository } from '../../../common/providers/LeadLoversProvider/models/crms/IListGroupRepository';
import { IListNamesByBoardAndColumnRepository } from '../../../common/providers/LeadLoversProvider/models/crms/IListNamesByBoardAndColumnRepository';
import { IListNamesByMachineFunnelAndModelRepository } from '../../../common/providers/LeadLoversProvider/models/machines/IListNamesByMachineFunnelAndModelRepository';
import { IListProductRepository } from '../../../common/providers/LeadLoversProvider/models/products/IListProductRepository';
import { IListTagRepository } from '../../../common/providers/LeadLoversProvider/models/tags/IListTagRepository';
import { IListTriggerActionsByTriggerIdRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IListTriggerActionsByTriggerIdRepository';
import { FlowDuplicationError } from '../../flows/dtos/flow.dto';
import { ActionDBOutput } from '../../nodes/dtos/action.dto';
import { eventType } from '../../nodes/dtos/trigger.dto';
type GetActions = {
    valid: ActionDBOutput[];
    invalid: FlowDuplicationError[];
};
export declare class GetActionsService {
    private listTriggerActionsByTriggerIdRepository;
    private listNamesByMachineFunnelAndModelRepository;
    private listTagRepository;
    private listWhatsAppAttendantRepository;
    private listWhatsAppTeamAttendantRepository;
    private listNamesByBoardAndColumnRepository;
    private listGroupRepository;
    private listProductRepository;
    constructor(listTriggerActionsByTriggerIdRepository: IListTriggerActionsByTriggerIdRepository, listNamesByMachineFunnelAndModelRepository: IListNamesByMachineFunnelAndModelRepository, listTagRepository: IListTagRepository, listWhatsAppAttendantRepository: IListWhatsAppAttendantRepository, listWhatsAppTeamAttendantRepository: IListWhatsAppTeamAttendantRepository, listNamesByBoardAndColumnRepository: IListNamesByBoardAndColumnRepository, listGroupRepository: IListGroupRepository, listProductRepository: IListProductRepository);
    execute(leadloversTriggerId: number, triggerReactFlowId: string, messageName: string, eventType: eventType): Promise<GetActions>;
    private makeMoveObject;
    private makeAssignObject;
}
export {};
