export interface IRemoveAllConditionalTriggerActionsByTriggerIdRepository {
    remove(triggerId: number): Promise<void>;
}
