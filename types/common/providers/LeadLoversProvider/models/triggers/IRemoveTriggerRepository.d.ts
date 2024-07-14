export interface IRemoveTriggerRepository {
    remove(id: number): Promise<void>;
}
