import { FunnelSequenceNumber, IListFunnelSequenceNumberRepository } from '../../models/funnels/IListFunnelSequenceNumberRepository';
export declare class ListFunnelSequenceNumberRepository implements IListFunnelSequenceNumberRepository {
    list(listCodi: number, funiCodi: number): Promise<FunnelSequenceNumber[]>;
}
