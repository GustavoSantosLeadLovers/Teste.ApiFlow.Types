import { IEditFunnelRepository } from '../models/IEditFunnelRepository';
export declare class EditFunnelRepository implements IEditFunnelRepository {
    edit(machineId: number, funnelId: number, funnelName: string): Promise<void>;
}
