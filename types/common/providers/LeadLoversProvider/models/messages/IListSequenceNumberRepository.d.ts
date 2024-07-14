export type ListSequenceNumber = {
    machineId: number;
    funnelId: number;
};
export interface IListSequenceNumberRepository {
    list(data: ListSequenceNumber): Promise<number>;
}
