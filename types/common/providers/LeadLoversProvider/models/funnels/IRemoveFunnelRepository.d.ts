export interface IRemoveFunnelRepository {
    remove(funiCodi: number): Promise<void>;
}
