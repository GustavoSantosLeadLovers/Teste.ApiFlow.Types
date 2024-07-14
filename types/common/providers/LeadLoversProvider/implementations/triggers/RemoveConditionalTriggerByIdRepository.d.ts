import { IRemoveConditionalTriggerByIdRepository } from '../../models/triggers/IRemoveConditionalTriggerByIdRepository';
export declare class RemoveConditionalTriggerByIdRepository implements IRemoveConditionalTriggerByIdRepository {
    remove(id: number): Promise<void>;
}
