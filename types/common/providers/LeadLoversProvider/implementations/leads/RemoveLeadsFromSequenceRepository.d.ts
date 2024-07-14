import { IRemoveLeadsFromSequenceRepository } from '../../models/leads/IRemoveLeadsFromSequenceRepository';
export declare class RemoveLeadsFromSequenceRepository implements IRemoveLeadsFromSequenceRepository {
    remove(funiCodi: number): Promise<void>;
}
