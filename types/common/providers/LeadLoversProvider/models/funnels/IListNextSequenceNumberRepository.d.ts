export type ListSequenceNumber = {
    machineId: number;
    funnelId: number;
};
export interface IListNextSequenceNumberRepository {
    list(data: ListSequenceNumber): Promise<number>;
}
