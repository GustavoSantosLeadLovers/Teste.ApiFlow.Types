export interface IEditFunnelRepository {
    edit(machineId: number, funnelId: number, funnelName: string, isInitialSequence: boolean): Promise<void>;
}
