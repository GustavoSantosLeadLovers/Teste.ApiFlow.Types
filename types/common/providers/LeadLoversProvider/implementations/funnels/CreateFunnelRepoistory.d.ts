import { ICreateFunnelRepository } from '../../models/funnels/ICreateFunnelRepository';
export declare class CreateFunnelRepository implements ICreateFunnelRepository {
    create(machineId: number, funnelName: string, isInitialSequence: boolean): Promise<number>;
}
