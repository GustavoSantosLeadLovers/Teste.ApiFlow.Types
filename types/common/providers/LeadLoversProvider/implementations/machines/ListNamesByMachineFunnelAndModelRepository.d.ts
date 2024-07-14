import { IListNamesByMachineFunnelAndModelRepository, Names } from '../../models/machines/IListNamesByMachineFunnelAndModelRepository';
export declare class ListNamesByMachineFunnelAndModelRepository implements IListNamesByMachineFunnelAndModelRepository {
    list(machineId: number, funnelId: number, messageIndex?: number): Promise<Names | undefined>;
}
