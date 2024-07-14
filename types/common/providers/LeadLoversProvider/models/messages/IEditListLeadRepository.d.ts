export interface IEditListLeadRepository {
    edit(listCodi: number, funiCodi: number, sequenceNumber: number, timeInSeconds: number): Promise<void>;
}
