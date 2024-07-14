export interface IMoveLeadToPreviousPositionRepository {
    move(listCodi: number, funiCodi: number, sequenceNumber: number): Promise<void>;
}
