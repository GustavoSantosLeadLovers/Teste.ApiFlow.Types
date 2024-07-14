import { IRemoveAllConditionalTriggerFiltersByTriggerIdRepository } from '../../models/triggers/IRemoveAllConditionalTriggerFiltersByTriggerIdRepository';
export declare class RemoveAllConditionalTriggerFiltersByTriggerIdRepository implements IRemoveAllConditionalTriggerFiltersByTriggerIdRepository {
    remove(triggerId: number): Promise<void>;
}
