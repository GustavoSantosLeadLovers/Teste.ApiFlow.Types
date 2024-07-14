import { IListMachineRepository, Machine } from '../../models/machines/IListMachineRepository';
export declare class ListMachineRepository implements IListMachineRepository {
    list(listCodi: number): Promise<Machine | undefined>;
}
