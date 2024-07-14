import { ICopyLeadsToAnotherMachineRepository } from '../../../common/providers/LeadLoversProvider/models/messages/ICopyLeadsToAnotherMachineRepository';
export declare class CopyLeadsToAnotherMachineService {
    private copyLeadsToAnotherMachineRepository;
    constructor(copyLeadsToAnotherMachineRepository: ICopyLeadsToAnotherMachineRepository);
    execute(machineId: number, funnelId: number, machineTo: number, funnelTo: number, levelTo: number, userId: number, total: number, modeCodi: number): Promise<void>;
}
