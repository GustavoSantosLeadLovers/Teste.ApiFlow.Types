export type FunnelSequenceNumber = {
    id: number;
    sequenceNumber: number;
    subtitle: string;
};
export interface IListFunnelSequenceNumberRepository {
    list(listCodi: number, funiCodi: number): Promise<FunnelSequenceNumber[]>;
}
