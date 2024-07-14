export interface IAlreadyExistsFunnelRepository {
    verify(machineId: number, funnelName: string): Promise<boolean>;
}
