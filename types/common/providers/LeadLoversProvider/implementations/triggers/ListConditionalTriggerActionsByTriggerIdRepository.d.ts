import { ConditionalTriggerAction, IListConditionalTriggerActionsByTriggerIdRepository } from '../../models/triggers/IListConditionalTriggerActionsByTriggerIdRepository';
export declare class ListConditionalTriggerActionsByTriggerIdRepository implements IListConditionalTriggerActionsByTriggerIdRepository {
    list(triggerId: number): Promise<ConditionalTriggerAction[]>;
}
