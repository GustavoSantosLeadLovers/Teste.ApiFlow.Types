import { Funnel, IListFunnelsByIdsRepository } from '../../models/funnels/IListFunnelsByIdsRepository';
export declare class ListFunnelsByIdsRepository implements IListFunnelsByIdsRepository {
    list(ids: number[]): Promise<Funnel[]>;
}
