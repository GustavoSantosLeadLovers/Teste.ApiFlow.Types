import { IRemoveAllTriggerActionsRepository } from '../../models/triggers/IRemoveAllTriggerActionsRepository';
export declare class RemoveAllTriggerActionsRepository implements IRemoveAllTriggerActionsRepository {
    remove(triggerId: number): Promise<void>;
}
