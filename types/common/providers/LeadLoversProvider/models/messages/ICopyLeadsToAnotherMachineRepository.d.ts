export interface ICopyLeadsToAnotherMachineRepository {
    copy(machineId: number, funnelId: number, machineTo: number, funnelTo: number, levelTo: number, userId: number, total: number, modeCodi: number): Promise<void>;
}
