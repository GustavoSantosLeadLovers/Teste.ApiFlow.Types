export interface IRemoveLeadActionsInSequenceRepository {
    remove(funiCodi: number): Promise<void>;
}
