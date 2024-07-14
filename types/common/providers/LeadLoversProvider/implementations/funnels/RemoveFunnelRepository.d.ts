import { IRemoveFunnelRepository } from '../../models/funnels/IRemoveFunnelRepository';
export declare class RemoveFunnelRepository implements IRemoveFunnelRepository {
    remove(funiCodi: number): Promise<void>;
}
