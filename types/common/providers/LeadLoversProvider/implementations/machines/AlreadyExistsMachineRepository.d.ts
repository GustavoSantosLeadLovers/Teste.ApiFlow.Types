import { IAlreadyExistsMachineRepository } from '../../models/machines/IAlreadyExistsMachineRepository';
export declare class AlreadyExistsMachineRepository implements IAlreadyExistsMachineRepository {
    verify(id: number, userId: number): Promise<boolean>;
}
