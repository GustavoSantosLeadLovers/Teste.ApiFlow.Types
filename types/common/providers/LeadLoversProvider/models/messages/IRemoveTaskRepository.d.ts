export interface IRemoveTaskRepository {
    remove(modeCodi: number): Promise<void>;
}
