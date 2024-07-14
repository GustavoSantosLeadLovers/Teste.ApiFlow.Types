export interface IRemoveLeadsFromSequenceRepository {
    remove(funiCodi: number): Promise<void>;
}
