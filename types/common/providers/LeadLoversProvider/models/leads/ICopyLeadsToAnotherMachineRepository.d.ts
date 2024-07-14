export interface ICopyLeadsToAnotherMachineRepository {
    copy(machineId: number, machineTo: number, funnelTo: number, levelTo: number, leads: string, userId: number): Promise<void>;
}
