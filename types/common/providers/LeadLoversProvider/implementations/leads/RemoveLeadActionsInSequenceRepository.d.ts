import { IRemoveLeadActionsInSequenceRepository } from '../../models/leads/IRemoveLeadActionsInSequenceRepository';
export declare class RemoveLeadActionsInSequenceRepository implements IRemoveLeadActionsInSequenceRepository {
    remove(funiCodi: number): Promise<void>;
}
