import { IRemoveTriggerRepository } from '../../models/triggers/IRemoveTriggerRepository';
export declare class RemoveTriggerRepository implements IRemoveTriggerRepository {
    remove(id: number): Promise<void>;
}
