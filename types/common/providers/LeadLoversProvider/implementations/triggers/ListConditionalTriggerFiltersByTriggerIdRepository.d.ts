import { ConditionalTriggerFilter, IListConditionalTriggerFiltersByTriggerIdRepository } from '../../models/triggers/IListConditionalTriggerFiltersByTriggerIdRepository';
export declare class ListConditionalTriggerFiltersByTriggerIdRepository implements IListConditionalTriggerFiltersByTriggerIdRepository {
    list(triggerId: number): Promise<ConditionalTriggerFilter[]>;
}
