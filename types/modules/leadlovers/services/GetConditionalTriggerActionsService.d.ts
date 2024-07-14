import { IListNamesByMachineFunnelAndModelRepository } from '../../../common/providers/LeadLoversProvider/models/machines/IListNamesByMachineFunnelAndModelRepository';
import { IListConditionalTriggerActionsByTriggerIdRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IListConditionalTriggerActionsByTriggerIdRepository';
import { actionType } from '../../nodes/dtos/action.dto';
type ConditionalTriggerAction = {
    type: actionType.MOVE_BY_CONDITIONAL_TRIGGER;
    matchConditionals: boolean;
    move: {
        machine: {
            id: number;
            name: string;
        };
        funnel: {
            id: number;
            name: string;
        };
        message: {
            name: string;
            index: number;
        };
    };
};
export declare class GetConditionalTriggerActionsService {
    private listNamesByMachineFunnelAndModelRepository;
    private listConditionalTriggerActionsByTriggerIdRepository;
    constructor(listNamesByMachineFunnelAndModelRepository: IListNamesByMachineFunnelAndModelRepository, listConditionalTriggerActionsByTriggerIdRepository: IListConditionalTriggerActionsByTriggerIdRepository);
    execute(triggerId: number): Promise<ConditionalTriggerAction[]>;
}
export {};
