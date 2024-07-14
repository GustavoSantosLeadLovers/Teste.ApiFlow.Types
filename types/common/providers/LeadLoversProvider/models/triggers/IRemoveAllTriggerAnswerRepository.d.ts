export interface IRemoveAllTriggerAnswerRepository {
    remove(triggerId: number): Promise<void>;
}
