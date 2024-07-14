export interface ICreateFunnelRepository {
    create(machineId: number, funnelName: string, isInitialSequence: boolean): Promise<number>;
}
