export interface IRemoveTriggerActionRepository {
    remove(id: number, triggerId: number): Promise<void>;
}
