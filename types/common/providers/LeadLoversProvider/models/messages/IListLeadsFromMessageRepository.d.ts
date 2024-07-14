export interface IListLeadsFromMessageRepository {
    list(listCodi: number, funiCodi: number, messageSequenceNumber: number): Promise<number>;
}
