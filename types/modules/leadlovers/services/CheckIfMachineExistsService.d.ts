import { IAlreadyExistsMachineRepository } from '../../../common/providers/LeadLoversProvider/models/machines/IAlreadyExistsMachineRepository';
export declare class CheckIfMachineExistsService {
    private alreadyExistsMachineRepository;
    constructor(alreadyExistsMachineRepository: IAlreadyExistsMachineRepository);
    execute(machineId: number, userId: number): Promise<boolean>;
}
