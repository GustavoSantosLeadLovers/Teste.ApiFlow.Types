import { ICreateFunnelRepository } from '../models/ICreateFunnelRepository';
export declare class CreateFunnelRepository implements ICreateFunnelRepository {
    create(machineId: number, funnelName: string): Promise<void>;
}
