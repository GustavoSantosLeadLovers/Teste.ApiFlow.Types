export interface IRemoveMessagesByFuniCodiRepository {
    remove(funiCodi: number): Promise<void>;
}
