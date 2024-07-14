export interface IRemoveTasksRepository {
    remove(funiCodi: number): Promise<void>;
}
