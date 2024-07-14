import { IRemoveTriggerActionRepository } from '../../models/triggers/IRemoveTriggerActionRepository';
export declare class RemoveTriggerActionRepository implements IRemoveTriggerActionRepository {
    remove(id: number, triggerId: number): Promise<void>;
}
