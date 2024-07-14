export interface IRemoveMessageRepository {
    remove(modeCodi: number): Promise<void>;
}
