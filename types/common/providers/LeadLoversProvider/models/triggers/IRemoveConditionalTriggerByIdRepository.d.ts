export interface IRemoveConditionalTriggerByIdRepository {
    remove(id: number): Promise<void>;
}
