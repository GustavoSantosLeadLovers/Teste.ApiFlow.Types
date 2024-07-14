export interface ICreateFunnelRepository {
    create(machineId: number, funnelName: string): Promise<void>;
}
