import { IAlreadyExistsFunnelRepository } from '../models/IAlreadyExistsFunnelRepository';
export declare class AlreadyExistsFunnelRepository implements IAlreadyExistsFunnelRepository {
    verify(machineId: number, funnelName: string, funnelId?: number): Promise<boolean>;
    private findFunnel;
}
