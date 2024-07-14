export interface IRemoveAllTriggerActionsRepository {
    remove(triggerId: number): Promise<void>;
}
