export interface IListTriggerActionRepository {
    list(triggerActionId: number): Promise<number>;
}
