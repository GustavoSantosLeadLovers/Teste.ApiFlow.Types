import { ConditionalTrigger, IListConditionalTriggerByIdRepository } from '../../models/triggers/IListConditionalTriggerByIdRepository';
export declare class ListConditionalTriggerByIdRepository implements IListConditionalTriggerByIdRepository {
    list(triggerId: number): Promise<ConditionalTrigger | undefined>;
}
