export interface IEditFunnelRepository {
    edit(machineId: number, funnelId: number, funnelName: string): Promise<void>;
}
