export interface IRemoveAllConditionalTriggerFiltersByTriggerIdRepository {
    remove(triggerId: number): Promise<void>;
}
