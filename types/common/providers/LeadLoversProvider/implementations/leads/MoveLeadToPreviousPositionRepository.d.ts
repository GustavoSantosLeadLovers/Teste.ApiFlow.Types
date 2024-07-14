import { IMoveLeadToPreviousPositionRepository } from '../../models/leads/IMoveLeadToPreviousPositionRepository';
export declare class MoveLeadToPreviousPositionRepository implements IMoveLeadToPreviousPositionRepository {
    move(listCodi: number, funiCodi: number, sequenceNumber: number): Promise<void>;
}
