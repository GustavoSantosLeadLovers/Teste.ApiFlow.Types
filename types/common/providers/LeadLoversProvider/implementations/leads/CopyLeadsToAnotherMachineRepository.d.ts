import { ICopyLeadsToAnotherMachineRepository } from '../../models/leads/ICopyLeadsToAnotherMachineRepository';
export declare class CopyLeadsToAnotherMachineRepository implements ICopyLeadsToAnotherMachineRepository {
    copy(machineId: number, machineTo: number, funnelTo: number, levelTo: number, leads: string, userId: number): Promise<void>;
}
