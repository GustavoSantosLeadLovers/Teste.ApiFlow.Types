import { IRemoveAllConditionalTriggerActionsByTriggerIdRepository } from '../../models/triggers/IRemoveAllConditionalTriggerActionsByTriggerIdRepository';
export declare class RemoveAllConditionalTriggerActionsByTriggerIdRepository implements IRemoveAllConditionalTriggerActionsByTriggerIdRepository {
    remove(triggerId: number): Promise<void>;
}
