import { IEditFunnelRepository } from '../../models/funnels/IEditFunnelRepository';
export declare class EditFunnelRepository implements IEditFunnelRepository {
    edit(machineId: number, funnelId: number, funnelName: string, isInitialSequence: boolean): Promise<void>;
}
